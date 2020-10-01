import axios from "axios";
export default {
  getWeather(x) {
    // funktio vuexia varten
    return axios({
      baseURL: "https://api.weatherbit.io/v2.0",
      url: "/current?city=" + x + process.env.VUE_APP_APIKEY,
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
};
