using Refit;
using System.Threading.Tasks;

namespace DAPI.Clients.BetaSerie
{
    public interface BetaSerieClient
    {
        [Get("/planning/general")]
        Task<string> GetPlanningFilmAnTvShowAsync([Header("X-BetaSeries-Key")] string authorization, [Query] string before, [Query] string after);

        [Get("/news/last")]
        Task<string> GetNewBetaSerieNewssync([Header("X-BetaSeries-Key")] string authorization, [Query] int number);
    }
}