import Vue from "vue";
import Vuex from "vuex";
import service from "@/services/service.js";

Vue.use(Vuex); // Vue käytä Vuex

export default new Vuex.Store({
  state: {
    // Määritellään tahtomamme data
    loc: "",
    i: 0,
    weather: {},
    dataIsRecived: false,
  },
  mutations: {
    save(state) {
      localStorage.setItem("location", state.loc);
    },
    retrieve(state) {
      if (localStorage.getItem('location')) {
        state.loc = localStorage.getItem('location');
      }
      else {
        return
      }
    },
    location(state, x) {
      // lokaatio käyttäjältä
      state.loc = x;
    },
    UPDATE_WEATHER(state) {
      service
        .getWeather(state.loc) // service.js funktio
        .then((response) => {
          // jos vastaa
          state.dataIsRecived = true;
          state.i++;
          state.weather = response.data.data[0]; // sää objektit
          document.getElementById("lokaatio_kontti").classList.add("valmis");
          document.getElementById("lokaatio").classList.add("valmis");
          document.getElementById("toimiiko").innerHTML =
            state.loc + " lähettää säätään";
        })
        .catch((error) => {
          // jos error
          document.getElementById("lokaatio_kontti").classList.remove("valmis");
          document.getElementById("lokaatio").classList.remove("valmis");
          document.getElementById("toimiiko").innerHTML =
            "valitettavasti " + state.loc + " ei ole meille tuttu";
          state.i = 0;
          state.dataIsRecived = false;
          error;
        });
    },
  },
  actions: {
    updateWeather(context) {
      context.commit("UPDATE_WEATHER");
    },
  },
});
