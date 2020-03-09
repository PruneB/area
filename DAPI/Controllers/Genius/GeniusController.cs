using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Refit;
using Microsoft.Extensions.Configuration;
using DAPI.Models.Genius;
using DAPI.Clients.Genius;

namespace DAPI.Controllers.Genius
{
    [ApiController]
    [Route("/genius")]
    public class GeniusControllers : ControllerBase
    {
        #region MEMBERS
        private IConfiguration _settings;
        private readonly ILogger<GeniusControllers> _logger;
        private GeniusClient _GeniusClient;

        #endregion MEMBERS

        #region CONSTRUCTOR
        public GeniusControllers(ILogger<GeniusControllers> logger, IConfiguration iConfig)
        {
            _settings = iConfig;
            _GeniusClient = RestService.For<GeniusClient>("http://api.genius.com/");
            _logger = logger;
        }

        #endregion CONSTRUCTOR

        #region ROUTES

        [HttpGet("search")]
        public async Task<ActionResult<GeniusSoundModel>> GetGeniusSoundInfoAsync(string q)
        {
            _logger.LogInformation($"Trying to get data for string {q} on Genius");

            try {
                var apiKey = _settings.GetSection("Genius").GetSection("apiKey").Value;
                var research = await _GeniusClient.GetGeniusSearchAsync(apiKey, q);
                var listIdHits = JsonConvert.DeserializeObject<GeniusSearchModel>(research);
                int id = listIdHits.response.hits[0].result.id;
                var result = await _GeniusClient.GetGeniusDataforSongAsync(apiKey, id);
                var musicInfos = JsonConvert.DeserializeObject<GeniusSoundModel>(result);
                return (musicInfos);
            } catch (ApiException exception) {
                _logger.LogInformation($"Echec to get data Genius: {exception.StatusCode}");
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