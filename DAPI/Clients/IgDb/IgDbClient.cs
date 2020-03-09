using Refit;
using System.Threading.Tasks;

namespace DAPI.Clients.IgDb
{
    public interface IgDbClient
    {
        [Get("/search")]
        Task<string> GetSearchesAsync([Header("user-key")] string API_KEY, [Query] string search, [Query] string fields="id,game,name");
        [Get("/games/{id}")]
        Task<string> GetDataGamesAsync([Header("user-key")] string API_KEY, int id, [Query] string fields="*");
        [Get("/release_dates/{id}")]
        Task<string> GetReleaseDatesAsync([Header("user-key")] string API_KEY, int id, [Query] string fields="*");
        [Get("/genres/{id}")]
        Task<string> GetGenresAsync([Header("user-key")] string API_KEY, int id, [Query] string fields="*");
        [Get("/franchises/{id}")]
        Task<string> GetFranchisesAsync([Header("user-key")] string API_KEY, int id, [Query] string fields="*");
        [Get("/platforms/{id}")]
        Task<string> GetPlatformsAsync([Header("user-key")] string API_KEY, int id, [Query] string fields="*");
    }
}