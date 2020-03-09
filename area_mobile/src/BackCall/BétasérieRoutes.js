const Planning = "http://192.168.0.16:5000/betaSerie/planning";

import Constants from "expo-constants";
const { manifest } = Constants;

const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:5000`)
  : `api.example.com`;

export async function callPlanning() {
    console.log(api);
    try {
        let response = await fetch(
          api + "/betaSerie/planning",
        );
        let responseJson = await response.json();
        return responseJson;
      } catch (error) {
        console.error(error);
      }
}