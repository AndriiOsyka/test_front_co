import { createStore } from 'vuex'

export default createStore({
  state: {
    cityes: [{
      name: "Kiyv",
      longitude: 30.52,
      latitude: 50.45,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "Africa%2FCairo"
    },
    {
      name: "London",
      longitude: 51.51,
      latitude: -0.13,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "Europe%2FLondon"
    },
    {
      name: "Madrid",
      longitude: 40.42,
      latitude: -3.70,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "Europe%2FBerlin",
    },
    {
      name: "New York",
      longitude: -5.28,
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
  },
  actions: {
    // eslint-disable-next-line
    async getWeatherByCity ({dispatch}, {city}) {
      console.log(city.latitude)
      const weather = await((await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=${city.timezone}&start_date=${this.state.date.start}&end_date=${this.state.date.end}`)).json());
      console.log(weather);
      return weather
    },
    async getDataFromApi ({ dispatch, commit }) {
      return await Promise.all(this.state.cityes.map(async (city) => {
        commit("SET_CITYES", await dispatch("getWeatherByCity", {city: city}));
      }))
    }
  }
})
