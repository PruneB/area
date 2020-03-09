using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Refit;
using Microsoft.Extensions.Configuration;
using DAPI.Models.MovieDatabase;
using DAPI.Clients.MovieDatabase;

namespace DAPI.Controllers
{
    [ApiController]
    [Route("/moviedatabase")]
    public class MovieDatabaseControllers : ControllerBase
    {
        #region MEMBERS
        private IConfiguration _settings;
        private readonly ILogger<MovieDatabaseControllers> _logger;
        private MovieDatabaseClient _MovieDatabaseClient;

        #endregion MEMBERS

        #region CONSTRUCTOR
        public MovieDatabaseControllers(ILogger<MovieDatabaseControllers> logger, IConfiguration iConfig)
        {
            _settings = iConfig;
            _MovieDatabaseClient = RestService.For<MovieDatabaseClient>("https://api.themoviedb.org/3");
            _logger = logger;
        }

        #endregion CONSTRUCTOR

        #region ROUTES

        [HttpGet("popular")]
        public async Task<ActionResult<MovieDatabasePopularModel>> GetMovieDatabasepopularAsync(string language = "en-US", string page = "1")
        {
            _logger.LogInformation($"Trying to set default language {language} and page {page} on movieDataBase");

            try {
                var apiKey = _settings.GetSection("MovieDatabase").GetSection("apiKey").Value;
                var popular = await _MovieDatabaseClient.GetPopularMovieAsync(apiKey, language, page);
                return (JsonConvert.DeserializeObject<MovieDatabasePopularModel>(popular));
            } catch (ApiException exception) {
                _logger.LogInformation($"Echec to get the most popular movies: {exception.StatusCode}");
                return ( StatusCode((int)exception.StatusCode));
            }
            catch (Exception exc)
            {
                _logger.LogInformation($"Critical error: {exc.Message}");
                return (StatusCode(500));
            }
        }

        [HttpGet("emissionpopular")]
        public async Task<ActionResult<MovieDatabaseEmissionPopularModel>> GetMovieDatabaseEmissionPopularAsync(string language = "en-US", string page = "1")
        {
            _logger.LogInformation($"Trying to set default language {language} and page {page} on movieDataBase");

            try {
                var apiKey = _settings.GetSection("MovieDatabase").GetSection("apiKey").Value;
                var emissionPopular = await _MovieDatabaseClient.GetEmissionPopularMovieAsync(apiKey, language, page);
                return (JsonConvert.DeserializeObject<MovieDatabaseEmissionPopularModel>(emissionPopular));
            } catch (ApiException exception) {
                _logger.LogInformation($"Echec to get emission popular: {exception.StatusCode}");
                return ( StatusCode((int)exception.StatusCode));
            }
            catch (Exception exc)
            {
                _logger.LogInformation($"Critical error: {exc.Message}");
                return (StatusCode(500));
            }
        }

        [HttpGet("search")]
        public async Task<ActionResult<MovieDatabaseSearchModel>> GetMovieDatabaseSearchAsync(string q, string language = "en-US", string page = "1", string include_adult = "false")
        {
            _logger.LogInformation($"Trying to set default language {language} and page {page} on movieDataBase");

            try {
                var apiKey = _settings.GetSection("MovieDatabase").GetSection("apiKey").Value;
                var search = await _MovieDatabaseClient.GetSearchMovieDatabaseAsync(apiKey, q, language, page, include_adult);
                return (JsonConvert.DeserializeObject<MovieDatabaseSearchModel>(search));
            } catch (ApiException exception) {
                _logger.LogInformation($"Echec to search: {exception.StatusCode}");
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