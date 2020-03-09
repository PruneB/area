using Refit;
using System.Threading.Tasks;

namespace DAPI.Clients.Genius
{
    public interface GeniusClient
    {
        [Get("/search")]
        Task<string> GetGeniusSearchAsync([Query] string access_token, [Query] string q);

        [Get("/songs/{ID}")]
        Task<string> GetGeniusDataforSongAsync([Query] string access_token, int ID);
    }
}