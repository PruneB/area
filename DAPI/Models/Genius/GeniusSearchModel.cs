using System.Collections.Generic;

namespace DAPI.Models.Genius
{
    public class GeniusSearchResponseHitsResultModel
    {
        public int id { get; set; } 
    }

    public class GeniusSearchResponseHitsModel
    {
        public GeniusSearchResponseHitsResultModel result { get; set; }
    }
    public class GeniusSearchResponseModel
    {
        public List<GeniusSearchResponseHitsModel> hits { get; set; }
    }

    public class GeniusSearchModel
    {
        public GeniusMetaModel meta { get; set; } 
        public GeniusSearchResponseModel response { get; set; }
    }
}