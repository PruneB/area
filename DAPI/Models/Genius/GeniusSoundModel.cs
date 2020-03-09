using Newtonsoft.Json;

namespace DAPI.Models.Genius
{
    public class GeniusSoundResponseSongModel
    {
        [JsonProperty(PropertyName = "header_image_url")]
        public string imageUrl { get; set; }
        public int id { get; set; } 
        public string url { get; set; }
    }
    public class GeniusSoundResponseModel
    {
        public GeniusSoundResponseSongModel song { get; set; }
    }

    public class GeniusSoundModel
    {
        public GeniusMetaModel meta { get; set; } 
        public GeniusSoundResponseModel response { get; set; }
    }
}