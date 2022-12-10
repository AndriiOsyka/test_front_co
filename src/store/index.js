import { createStore } from 'vuex'

export default createStore({
  state: {
    cityes: [{
      name: "Kiyv",
      longitude: 30.5,
      latitude: 50.4375,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "Africa%2FCairo"
    },
    {
      name: "London",
      longitude: 51.5,
      latitude: -0.125,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "Europe%2FLondon"
    },
    {
      name: "Madrid",
      longitude: 40.375,
      latitude: -3.75,
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
      start: "2022-12-10",
      end: "2022-12-10"
    }
  },
  getters: {
  },
  mutations: {
    SET_CITYES: (state, data) => {
      state.cityes.map(city => {
        if(city.latitude === data.latitude && city.longitude === data.longitude) {
          city.minTemp = data.daily.temperature_2m_min[0];
          city.maxTemp = data.daily.temperature_2m_max[0];
        }
      })
    },
    DELETE_CITY: (state, name) => {
      state.cityes.splice(state.cityes.findIndex(city => city.name === name), 1);
    }
  },
  actions: {
    // eslint-disable-next-line
    async getWeatherByCity ({dispatch}, {city}) {
      const weather = await((await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=${city.timezone}&start_date=${this.state.date.start}&end_date=${this.state.date.end}`)).json());
      return weather
    },
    async getDataFromApi ({ dispatch, commit }) {
      return await Promise.all(this.state.cityes.map(async (city) => {
        commit("SET_CITYES", await dispatch("getWeatherByCity", {city: city}));
      }))
    }
  }
})
