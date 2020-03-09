using System.Collections.Generic;
using Newtonsoft.Json;
using DAPI.Clients.IgDb;

namespace DAPI.Models.IgDb
{

    public class ReleaseDatesFocus
    {
       [JsonProperty(PropertyName = "created_at")]
        public int createdAt { get; set; }
    }
    public class FranchisesFocus
    {
        public string name { get; set; }
    }
    public class GenresFocus
    {
        public string name { get; set; }
    }
    public class PlatformsFocus
    {
        public string name { get; set; }
    }
    
    public class GameData
    {
        public int id { get; set; }
        public string name { get; set; }
        public int createdAt { get; set; }
        public List<int> platforms { get; set; }
        public List<string> platformsNames { get; set; }
        public List<int> franchises { get; set; }
        public List<string> franchisesNames { get; set; }
        public List<int> genres { get; set; }
        public List<string> genresNames { get; set; }
    }

    public class AllDataSearch
    {
        public int id { get; set; }
        [JsonProperty(PropertyName = "game")]
        public int gameId { get; set; }
        public string alternativeName { get; set; }
        public string name { get; set; }
        public GameData games { get; set; }
    }
}