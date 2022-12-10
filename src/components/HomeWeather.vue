<template>
  <div class="home">
    <div class="dateInfo">
      <h1>Weather</h1>
      <div class="date">
        <button class="selectDay" @click="prevDay">
          yesterday
        </button>
        <button class="selectDay">
          Actually for: 
          {{date.start}}
        </button>
        <button class="selectDay" @click="nextDay">
          tomorrow
        </button>
      </div>
    </div>
    <div class="weather">
      <div class="header">
        <div class="col">
          <h3>City</h3>
          <div class="btnSort">
            <button class="btnSortUp" @click.stop="sortUpCities"><font-awesome-icon icon="fa-solid fa-chevron-up" /></button>
            <button class="btnSortDown" @click.stop="sortDownCities"><font-awesome-icon icon="fa-solid fa-chevron-down" /></button>
          </div>
        </div>
        <div class="col">
          <h3>Minimal temperature</h3>
          <div class="btnSort">
            <button class="btnSortUp" @click.stop="sortUpTemperatureMin"><font-awesome-icon icon="fa-solid fa-chevron-up" /></button>
            <button class="btnSortDown" @click.stop="sortDownTemperatureMin"><font-awesome-icon icon="fa-solid fa-chevron-down" /></button>
          </div>
        </div>
        <div class="col">
          <h3>Maximal temperature</h3>
          <div class="btnSort">
            <button class="btnSortUp" @click.stop="sortUpTemperatureMax"><font-awesome-icon icon="fa-solid fa-chevron-up" /></button>
            <button class="btnSortDown" @click.stop="sortDownTemperatureMax"><font-awesome-icon icon="fa-solid fa-chevron-down" /></button>
          </div>
        </div>
      </div>
      <div>
        <city-weather v-for="city of cities" :key="city.latitude" :city="city"/>
      </div>
    </div>
  </div>
</template>

<script>
import CityWeather from './CityWeather.vue';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'HomeWeather',
  components: {
    CityWeather
  },
  methods: {
      ...mapActions(['getDataFromApi']),
      ...mapMutations(['SET_DATE']),
      sortUpCities () {
        this.cities.sort(function (a, b) {
          return ('' + b.name).localeCompare(a.name);
      })
      },
      sortDownCities () {
        this.cities.sort(function (a, b) {
          return ('' + a.name).localeCompare(b.name);
      })
      },
      sortUpTemperatureMin () {
        this.cities.sort((a, b) => b.minTemp - a.minTemp)
      },
      sortUpTemperatureMax () {
        this.cities.sort((a, b) => b.maxTemp - a.maxTemp)
      },
      sortDownTemperatureMax () {
        this.cities.sort((a, b) => a.maxTemp - b.maxTemp)
      },
      sortDownTemperatureMin () {
        this.cities.sort((a, b) => a.minTemp - b.minTemp)
      },
      async nextDay () {
        this.SET_DATE(1);
        await this.getDataFromApi();
      },
      async prevDay () {
        this.SET_DATE(0);
        await this.getDataFromApi();
      }
  },
  computed: {
    ...mapState({
      cities: state => state.cities
    }),
    ...mapState({
      date: state => state.date
    })
  },
  async mounted() {
    await this.getDataFromApi();
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-transform: uppercase;
  text-align: center;
}
.home {
  width: 100%;
    .dateInfo {
      text-align: right;
      padding: 20px 0;
      .date {
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(3, auto);
        align-items: center;
        .selectDay {
          background: #6d6c6a;
          border: none;
          color: #fff;
          cursor: pointer;
          transition: .3s;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 500;
          text-transform: uppercase;
          &:hover {
            background: #42336a;
          }
        }
      }
    }
    .weather {
      width: 100%;
    .header {
      width: 100%;
      display: grid;
      grid-template-columns: 30% 35% 35%;
      background: #6d6c6a;
      border-radius: 5px;
      color: #fff;
      margin: 0 0 10px;
      padding: 15px 0;

      h3 {
        font-weight: 500;
        margin: 0;
      }
      .col {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #fff;

        &:last-child {
          border-right: 0;
        }
        .btnSort {
          position: absolute;
          border-radius: 50%;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .btnSortUp, .btnSortDown {
            border: none;
            cursor: pointer;
            font-size: 10px;
            color: #fff;
            transition: .3s;
            background: none;
            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>