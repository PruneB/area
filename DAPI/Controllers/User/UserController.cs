using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DAPI.Models.User;
using System.Threading.Tasks;
using DAPI.ExternClass;

namespace DAPI.Controllers.User
{
    [ApiController]
    [Route("/users")]
    public class UserControllers : ControllerBase
    {
        #region MEMBERS
        private readonly ILogger<UserControllers> _logger;
        private DBConnection _database;

        #endregion MEMBERS

        #region CONSTRUCTOR
        public UserControllers(ILogger<UserControllers> logger)
        {
            _database = new DBConnection();
            _logger = logger;
        }

        #endregion CONSTRUCTOR

        #region ROUTES

        [HttpGet("{ID}")]
        public async Task<ActionResult<UserModel>> GetuserInfosAsync(int ID)
        {
            _logger.LogInformation("Trying to get user Json");

            try {
                var User = _database.GetUserByID(ID);
                await Task.Delay(1);
                if (User == null) {
                    return (StatusCode(404));
                }
                return (User);
            } catch (Exception exception) {
                _logger.LogInformation($"Echec to get user Json: {exception.Message}");
                return (StatusCode(500));
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserModel>> GetuserIdAsync([FromBody] RequestForNewUserModel body)
        {
            _logger.LogInformation("Trying to get user Json");

            try {
                var User = _database.GetUserID(body.email, body.password);                
                await Task.Delay(1);
                if (User == null) {
                    return (StatusCode(404));
                }
                return (User);
            } catch (Exception exception) {
                _logger.LogInformation($"Echec to get ID user Json: {exception.Message}");
                return (StatusCode(500));
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult> PostNewuserInfosAsync([FromBody] RequestForNewUserModel body)
        {
            _logger.LogInformation("Trying to post user Json");

            try {
                _database.InsertNewUser(body.email, body.password);
                await Task.Delay(1);
                return (StatusCode(201));
            } catch (Exception exception) {
                _logger.LogInformation($"Echec to post user Json: {exception.Message}");
                return (StatusCode(400));
            }
        }

        [HttpPatch("{ID}/{pref}")]
        public async Task<ActionResult> PatchNewUserPrefAsync(int ID, string pref)
        {
            _logger.LogInformation("Trying to patch user Json");

            try {
                _database.UpdatePrefUser(ID, pref);
                await Task.Delay(1);
                return (StatusCode(202));
            } catch (Exception exception) {
                _logger.LogInformation($"Echec to patch user Json: {exception.Message}");
                return (StatusCode(400));
            }
        }

        #endregion ROUTES

    }
}