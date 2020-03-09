using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Refit;
using System.Collections.Generic;
using DAPI.Models.IgDb;
using DAPI.Clients.IgDb;

namespace DAPI.Controllers
{
    [ApiController]
    [Route("/igdb")]
    public class IgDbControllers : ControllerBase
    {
        #region MEMBERS
        private IConfiguration _settings;
        private readonly ILogger<IgDbControllers> _logger;
        private IgDbClient _IgDbClient;

        #endregion MEMBERS

        #region CONSTRUCTOR
        public IgDbControllers(ILogger<IgDbControllers> logger, IConfiguration iConfig)
        {
            _settings = iConfig;
            _IgDbClient = RestService.For<IgDbClient>("https://api-v3.igdb.com");
            _logger = logger;
        }

        #endregion CONSTRUCTOR

        #region ROUTES

        [HttpGet("search")]
        public async Task<ActionResult<List<AllDataSearch>>> GetSearchesAsync(string search)
        {
            _logger.LogInformation($"Trying to set default api, local {search} and type id,game,name on IgDb");

            try {
                var apiKey = _settings.GetSection("IgDb").GetSection("apiKey").Value;
                var popular = await _IgDbClient.GetSearchesAsync(apiKey, search);
                List<AllDataSearch> data = JsonConvert.DeserializeObject<List<AllDataSearch>>(popular);
                List<AllDataSearch> result = new List<AllDataSearch>();
                foreach(var item in data)
                {
                    if(item.gameId != 0){
                        result.Add(item);
                    }
                }
                return (result);
            } catch (ApiException exception) {
                _logger.LogInformation($"Echec to get date: {exception.StatusCode}");
                return ( StatusCode((int)exception.StatusCode));
            }
            catch (Exception exc)
            {
                _logger.LogInformation($"Critical error: {exc.Message}");
                return (StatusCode(500));
            }
        }

        [HttpGet("games/{id}")]
        public async Task<ActionResult<GameData>> GetDataGamesAsync(int id)
        {
            _logger.LogInformation($"Trying to set default api, local {id} and type id,game,name on IgDb");

            try {
                var apiKey = _settings.GetSection("IgDb").GetSection("apiKey").Value;
                var popular = await _IgDbClient.GetDataGamesAsync(apiKey, id);
                List<GameData> data = JsonConvert.DeserializeObject<List<GameData>>(popular);
                var realease = await _IgDbClient.GetReleaseDatesAsync(apiKey, id);
                List<ReleaseDatesFocus> tmp = JsonConvert.DeserializeObject<List<ReleaseDatesFocus>>(realease);
                data[0].createdAt = tmp[0].createdAt;
                List<string> genre = new List<string>();
                foreach (var item in data[0].genres)
                {
                    var genresData = await _IgDbClient.GetGenresAsync(apiKey, item);
                    var genreString = JsonConvert.DeserializeObject<List<GenresFocus>>(genresData);
                    genre.Add(genreString[0].name);
                }
                data[0].genresNames = genre;
                List<string> franchises = new List<string>();
                foreach (var item in data[0].franchises)
                {
                    var franchisesData = await _IgDbClient.GetFranchisesAsync(apiKey, item);
                    var franchisesString = JsonConvert.DeserializeObject<List<FranchisesFocus>>(franchisesData);
                    franchises.Add(franchisesString[0].name);
                }
                data[0].franchisesNames = franchises;

                List<string> platforms = new List<string>();
                foreach (var item in data[0].platforms)
                {
                    var platformsData = await _IgDbClient.GetPlatformsAsync(apiKey, item);
                    var platformsString = JsonConvert.DeserializeObject<List<PlatformsFocus>>(platformsData);
                    platforms.Add(platformsString[0].name);
                }
                data[0].platformsNames = platforms;

                return (data[0]);      
            } catch (ApiException exception) {
                _logger.LogInformation($"Echec to get game infos: {exception.StatusCode}");
                return ( StatusCode((int)exception.StatusCode));
            }
            catch (Exception exc)
            {
                _logger.LogInformation($"Critical error: {exc.Message}");
                return (StatusCode(500));
            }
        }
        #endregion ROUTES

    }
}