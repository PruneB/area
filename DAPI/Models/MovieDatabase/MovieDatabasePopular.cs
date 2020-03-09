using System.Collections.Generic;

namespace DAPI.Models.MovieDatabase
{
    public class MovieDatabaseEmissionPopularModel
    {
        public string page { get; set; }
        public string total_results { get; set; }
        public string total_pages { get; set; }
         public List<MovieDatabaseEmissionControllers> results { get; set; }
        public string date { get; set; }
        public string title { get; set; }
        public string name { get; set; }
        public string poster_path { get; set; }
    }

    public class MovieDatabaseEmissionControllers
    {
        public string id { get; set; }
        public string popularity { get; set; }
        public string overview { get; set; }
        public string release_date { get; set; }
        public string name { get; set; }
        public string adult { get; set; }
        public string vote_count { get; set; }
        public string poster_path { get; set; }
    }
    
    public class MovieDatabasePopularModel
    {
        public string page { get; set; }
        public string total_results { get; set; }
        public string total_pages { get; set; }
         public List<MovieDatabaseControllers> results { get; set; }
        public string date { get; set; }
        public string poster_path { get; set; }
    }

    public class MovieDatabaseControllers
    {
        public string id { get; set; }
        public string popularity { get; set; }
        public string overview { get; set; }
        public string original_title { get; set; }
        public string original_language { get; set; }
        public string poster_path { get; set; }
        public string title { get; set; }
        public string release_date { get; set; }
        public string adult { get; set; }
        public string vote_count { get; set; }

    }
}