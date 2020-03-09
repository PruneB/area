using Microsoft.AspNetCore.Mvc;

namespace DAPI.ExternClass
{
    public class ActionResultReturn : ControllerBase
    {
        #region CONSTRUCTOR
        public ActionResultReturn()
        {
        }

        #endregion CONSTRUCTOR

        #region METHODS
        public ActionResult ChooseReturn(int httpCode)
        {
            switch (httpCode) {
                case 400:
                    return ( BadRequest() );
                case 401:
                    return ( Unauthorized() );
                case 403:
                    return ( Forbid() );
                case 404:
                    return ( NotFound() );
                default:
                    return ( StatusCode(httpCode) );
            }
        }

        #endregion METHODS

        #region ROUTES
        #endregion ROUTES

    }
}