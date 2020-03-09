using System.Collections.Generic;
using Newtonsoft.Json;

namespace DAPI.Models.BetaSerie
{
    public class BetaSeriePlanningDetailEpisodeModel
    {
        public int id { get; set; }
        [JsonProperty(PropertyName = "youtube_id")]
        public string youtubeId { get; set; }
        public string title { get; set; }
        public int season { get; set; }
        public int episode { get; set; }
        public string description { get; set; }
        public string date { get; set; }
        [JsonProperty(PropertyName = "resource_url")]
        public string resourceUrl { get; set; }
    }

    public class BetaSeriePlanningModel
    {
        public List<BetaSeriePlanningDetailEpisodeModel> episodes { get; set; }
        
    }
}