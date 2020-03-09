using System.Collections.Generic;
using Newtonsoft.Json;

namespace DAPI.Models.BetaSerie
{
    public class BetaSerieNewsDetailEpisodeModel
    {
        public string id { get; set; }
        public string title { get; set; }
        public string url { get; set; }
        [JsonProperty(PropertyName = "picture_url")]
        public string pictureUrl { get; set; }
        public string date { get; set; }
    }

    public class BetaSerieNewsModel
    {
        public List<BetaSerieNewsDetailEpisodeModel> news { get; set; }
        
    }
}