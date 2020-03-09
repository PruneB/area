using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DAPI.Models;
using System.Collections.Generic;

namespace DAPI.Controllers
{
    [ApiController]
    [Route("/about.json")]
    public class AboutControllers
    {
        #region MEMBERS
        private readonly ILogger<AboutControllers> _logger;

        #endregion MEMBERS

        #region CONSTRUCTOR
        public AboutControllers(ILogger<AboutControllers> logger)
        {
            _logger = logger;
        }

        #endregion CONSTRUCTOR

        #region METHODS
        private AboutServieWidgetsModel CreateWidget(string name, string description, List<string> paramsName, List<string> paramsType)
        {
            var index = 0;
            var Widget = new AboutServieWidgetsModel();
            Widget.name = name;
            Widget.description = description;
            Widget.Params = new List<AboutServieWidgetsParamsModel>();
            foreach (string data in paramsName)
            {
                var NewWidget = new AboutServieWidgetsParamsModel();
                NewWidget.name = data;
                NewWidget.type = paramsType[index];
                Widget.Params.Add(NewWidget);
                index = index = 1;
            }
            return (Widget);
        }

        private AboutServivesModel CreateMovieDatabaseWidget()
        {
            AboutServivesModel NewService = new AboutServivesModel();
            NewService.name = "Movie Database";
            NewService.widgets = new List<AboutServieWidgetsModel>();
            NewService.widgets.Add(CreateWidget("Most Popular films", "Get list of most popular films", new List<string> {"language", "page"}, new List<string> {"string (optionnal)", "string (optionnal)"}));
            NewService.widgets.Add(CreateWidget("Most Popular TV show", "Get list of most popular TV show", new List<string> {"language", "page"}, new List<string> {"string (optionnal)", "string (optionnal)"}));
            NewService.widgets.Add(CreateWidget("Search Bar for films and TV show", "Get films or TV show by search bar", new List<string> {"language", "page", "include_adult"}, new List<string> {"string (optionnal)", "string (optionnal)", "string (optionnal)"}));
            return (NewService);
        }

        private AboutServivesModel CreateBetaSerieWidget()
        {
            AboutServivesModel NewService = new AboutServivesModel();
            NewService.name = "BetaSerie";
            NewService.widgets = new List<AboutServieWidgetsModel>();
            NewService.widgets.Add(CreateWidget("Planning serie", "Get serie's planning", new List<string> {"before", "after"}, new List<string> {"string (optionnal)", "string (optionnal)"}));
            NewService.widgets.Add(CreateWidget("News series", "Get all news series", new List<string> {"number"}, new List<string> {"int (optionnal)"}));
            return (NewService);
        }

        private AboutServivesModel CreateGeniusWidget()
        {
            AboutServivesModel NewService = new AboutServivesModel();
            NewService.name = "Genius";
            NewService.widgets = new List<AboutServieWidgetsModel>();
            NewService.widgets.Add(CreateWidget("Lyrics of music", "Get music's lyrics", new List<string> {"q"}, new List<string> {"string"}));
            return (NewService);
        }

        private AboutServivesModel CreateIGDBWidget()
        {
            AboutServivesModel NewService = new AboutServivesModel();
            NewService.name = "Movie Database";
            NewService.widgets = new List<AboutServieWidgetsModel>();
            NewService.widgets.Add(CreateWidget("Games ID", "Get list of Games by name", new List<string> {"search"}, new List<string> {"string"}));
            NewService.widgets.Add(CreateWidget("Search infos games", "Get game by ID", new List<string> {"id"}, new List<string> {"int"}));
            return (NewService);
        }

        #endregion METHODS

        #region ROUTES

        [HttpGet("")]
        public ActionResult<AboutModel> GetAboutJsonAsync()
        {
            _logger.LogInformation("Trying to get About Json");

            try {
                AboutModel Result = new AboutModel();
                Result.client = new AboutClientModel();
                Result.client.host = "localhost:5001";
                Result.server = new AboutServerModel();
                Result.server.current_time = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
                Result.server.services = new List<AboutServivesModel>();

                Result.server.services.Add(CreateMovieDatabaseWidget());
                Result.server.services.Add(CreateBetaSerieWidget());
                Result.server.services.Add(CreateGeniusWidget());
                Result.server.services.Add(CreateIGDBWidget());

                return (Result);
            } catch (Exception exception) {
                _logger.LogInformation($"Echec to get About Json: {exception.Message}");
                return (null);
            }
        }

        #endregion ROUTES

    }
}