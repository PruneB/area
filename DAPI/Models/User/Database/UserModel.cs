namespace DAPI.Models.User
{
    public class UserModel
    {
        public int ID { get; set; }
        public bool Spotify { get; set; }
        public bool MovieDatabase { get; set; }
        public bool BetaSerie { get; set; }
        public bool Genius { get; set; }
        public bool IGDB { get; set; }
    }
    public class RequestForNewUserModel
    {
        public string email { get; set; }
        public string password { get; set; }
    }
}