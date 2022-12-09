import { createStore } from 'vuex'
import { getWeather } from '../request/request'

export default createStore({
  state: {
    cityes: [{
      name: "Kiyv",
      longitude: 30.52,
      latityde: 50.45,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "Africa%2FCairo"
    },
    {
      name: "London",
      longitude: 51.51,
      latityde: -0.13,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "Europe%2FLondon"
    },
    {
      name: "Madrid",
      longitude: 40.42,
      latityde: -3.70,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "Europe%2FBerlin",
    },
    {
      name: "Canberra",
      longitude: -35.28,
      latityde: 149.13,
      minTemp: undefined,
      maxTemp: undefined,
      timezone: "timezone=Australia%2FSydney"
    }],
    date: undefined
  },
  getters: {
  },
  mutations: {
    setCityes: (state, data) => {
      state.cityes.map((city, index) => {
        if(city.latitude === data[index].latitude && city.longitude === data[index].longitude) {
          city.minTemp = data[index].daily.temperature_2m_min[0];
          city.maxTemp = data[index].daily.temperature_2m_max[0];
        }
      })
    },
  },
  actions: {
    async GET_DATA_FROM_API ({commit}) {
      const requests = [];
      this.state.cityes.forEach(city => {
        requests.push(getWeather(city, this.state.date))
      })
      await Promise.all(requests).then(values => commit('setCityes', values));
      console.log(requests);
    }
  },
  modules: {
  }
})
