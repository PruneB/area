using Refit;
using System;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using DAPI.Models.BetaSerie;
using DAPI.Clients.BetaSerie;

namespace DAPI.Controllers.BetaSerie
{
    [ApiController]
    [Route("/betaserie")]
    public class BetaSerieControllers : ControllerBase
    {
        #region MEMBERS
        private IConfiguration _settings;
        private readonly ILogger<BetaSerieControllers> _logger;
        private BetaSerieClient _BetaSerieClient;

        #endregion MEMBERS

        #region CONSTRUCTOR
            public BetaSerieControllers(ILogger<BetaSerieControllers> logger, IConfiguration iConfig)
            {
                _settings = iConfig;
                _BetaSerieClient = RestService.For<BetaSerieClient>("https://api.betaseries.com/");
                _logger = logger;
            }

        #endregion CONSTRUCTOR

        #region METHODS
        #endregion METHODS

        #region ROUTES

        [HttpGet("planning")]
        public async Task<ActionResult<BetaSeriePlanningModel>> GetBetaSeriePlanningAsync(string before = "8", string after = "8")
        {
            _logger.LogInformation($"Trying to get planing since -{before} and for +{after} on BetaSerie");

            try {
                var apiKey = _settings.GetSection("betaserie").GetSection("apiKey").Value;
                var planning = await _BetaSerieClient.GetPlanningFilmAnTvShowAsync(apiKey, before, after);
                return (JsonConvert.DeserializeObject<BetaSeriePlanningModel>(planning));
            } catch (ApiException exception) {
                _logger.LogInformation($"Echec to get planing: {exception.StatusCode}");
                return ( StatusCode((int)exception.StatusCode));
            }
            catch (Exception exc)
            {
                _logger.LogInformation($"Critical error: {exc.Message}");
                return (StatusCode(500));
            }
        }

        [HttpGet("news")]
        public async Task<ActionResult<BetaSerieNewsModel>> GetBetaSerieNewsAsync(int number = 10)
        {
            _logger.LogInformation($"Trying to get news {number} on BetaSerie");

            try {
                var apiKey = _settings.GetSection("betaserie").GetSection("apiKey").Value;
                var planning = await _BetaSerieClient.GetNewBetaSerieNewssync(apiKey, number);
                return (JsonConvert.DeserializeObject<BetaSerieNewsModel>(planning));
            } catch (ApiException exception) {
                _logger.LogInformation($"Echec to get news: {exception.Message}");
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