using Refit;
using System.Threading.Tasks;

namespace DAPI.Clients.MovieDatabase
{
    public interface MovieDatabaseClient
    {
        [Get("/movie/popular")]
        Task<string> GetPopularMovieAsync([Query] string api_key, [Query] string language, [Query] string page);

        [Get("/tv/popular")]
        Task<string> GetEmissionPopularMovieAsync([Query] string api_key, [Query] string language, [Query] string page);
        
        [Get("/search/movie")]
        Task<string> GetSearchMovieDatabaseAsync([Query] string api_key,  [Query] string query,  string language, string page, string include_adult);
    }
}