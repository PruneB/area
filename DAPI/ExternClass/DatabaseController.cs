using MySql.Data.MySqlClient;
using DAPI.Models.User;

namespace DAPI.ExternClass
{
    public class DBConnection
    {
        private string _server = "mysql-legau1000.alwaysdata.net";
        private string _UID = "legau1000";
        private string _password = "VIi!D}E\\";
        private string _databaseName = "legau1000_users";
        private MySqlConnection _database;

        public DBConnection()
        {
            string connstring = "Server="+ _server +"; database="+_databaseName+"; UID="+_UID+"; password="+_password;
            _database = new MySqlConnection(connstring);
            _database.Open();
        }

        public UserModel GetUserByID(int id)
        {
            int index = 0;
            UserModel User = new UserModel();
            string query = "SELECT id, Spotify, MovieDatabase, BetaSerie, Genius, IGDB FROM Users WHERE id=" + id.ToString();

            MySqlCommand cmd = new MySqlCommand(query, _database);
            MySqlDataReader dataReader = cmd.ExecuteReader();
            while (dataReader.Read())
            {
                User.ID = (int) dataReader["id"];
                User.Spotify = (bool) dataReader["Spotify"];
                User.MovieDatabase = (bool) dataReader["MovieDatabase"];
                User.BetaSerie = (bool) dataReader["BetaSerie"];
                User.Genius = (bool) dataReader["Genius"];
                User.IGDB = (bool) dataReader["IGDB"];
            }
            dataReader.Close();
            if (index == 0) {
                return (null);
            }
            return (User);
        }

        public UserModel GetUserID(string Email, string Password)
        {
            UserModel User = new UserModel();
            int index = 0;
            string query = "SELECT id, Spotify, MovieDatabase, BetaSerie, Genius, IGDB FROM Users WHERE Email='" + Email + "' AND Password='" + Password + "'";

            MySqlCommand cmd = new MySqlCommand(query, _database);
            MySqlDataReader dataReader = cmd.ExecuteReader();
            while (dataReader.Read())
            {
                index = index + 1;
                User.ID = (int) dataReader["id"];
                User.Spotify = (bool) dataReader["Spotify"];
                User.MovieDatabase = (bool) dataReader["MovieDatabase"];
                User.BetaSerie = (bool) dataReader["BetaSerie"];
                User.Genius = (bool) dataReader["Genius"];
                User.IGDB = (bool) dataReader["IGDB"];
            }
            dataReader.Close();
            if (index == 0) {
                return (null);
            }
            return (User);
        }

        private void executeCommand(string query)
        {
            MySqlCommand cmd = new MySqlCommand(query, _database);
            cmd.ExecuteNonQuery();
        }

        public void InsertNewUser(string Email, string Password)
        {
            string query = "INSERT INTO Users (Email, Password) VALUES('"+Email+"', '"+Password+"')";
            executeCommand(query);
        }

        public void UpdatePrefUser(int id, string modif)
        {
            string query = "UPDATE Users SET "+modif+"=("+modif+" + 1) % 1 WHERE id=" + id.ToString();
            executeCommand(query);
        }

    }
}