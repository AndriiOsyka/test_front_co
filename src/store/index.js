import { createStore } from 'vuex'

export default createStore({
  state: {
    cities: [{
      name: "Kyiv",
      longitude: 30.5,
      latitude: 50.4375,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "Africa%2FCairo"
    },
    {
      name: "London",
      longitude: -0.125,
      latitude: 51.5,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "Europe%2FLondon"
    },
    {
      name: "Madrid",
      longitude: -3.75,
      latitude: 40.375,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "Europe%2FBerlin",
    },
    {
      name: "New York",
      longitude: -5.25,
      latitude: 56.25,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "America%2FNew_York"
    }],
    date: {
      start: new Date().toISOString().split('T')[0]
    }
  },
  getters: {
  },
  mutations: {
    SET_CITIES: (state, data) => {
      state.cities.map(city => {
        if(Math.floor(city.latitude) === Math.floor(data.latitude) && Math.floor(city.longitude) === Math.floor(data.longitude)) {
          city.minTemp = data.daily.temperature_2m_min[0];
          city.maxTemp = data.daily.temperature_2m_max[0];
        }
      })
    },
    DELETE_CITY: (state, name) => {
      state.cities.splice(state.cities.findIndex(city => city.name === name), 1);
    },
    SET_DATE: (state, dateHandler) => {
      if(dateHandler) {
        state.date.start = new Date((new Date(state.date.start)).setDate((new Date(state.date.start)).getDate() + 1)).toISOString().split('T')[0];
      }
      else {
        state.date.start = new Date((new Date(state.date.start)).setDate((new Date(state.date.start)).getDate() - 1)).toISOString().split('T')[0];
      }
    }
  },
  actions: {
    // eslint-disable-next-line
    async getWeatherByCity ({ dispatch }, {city}) {
      const weather = await((await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=${city.timezone}&start_date=${this.state.date.start}&end_date=${this.state.date.start}`)).json());
      return weather
    },
    async getDataFromApi ({ dispatch, commit }) {
      return await Promise.all(this.state.cities.map(async (city) => {
        commit("SET_CITIES", await dispatch("getWeatherByCity", {city: city}));
      }))
    }
  }
})
