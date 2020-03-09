using System.Collections.Generic;

namespace DAPI.Models.MovieDatabase
{
    public class MovieDatabaseSearchModel
    {
        public string page { get; set; }
        public string total_results { get; set; }
        public string total_pages { get; set; }
         public List<MovieDatabaseSearchControllers> results { get; set; }
        public string date { get; set; }
    }

    public class MovieDatabaseSearchControllers
    {
        public string id { get; set; }
        public string title { get; set; }
        public string name { get; set; }
        public string popularity { get; set; }
        public string overview { get; set; }
        public string release_date { get; set; }
        public string adult { get; set; }
        public string vote_count { get; set; }
        public string poster_path { get; set; }
    }
}