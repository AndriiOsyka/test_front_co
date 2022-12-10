<template>
  <div class="home">
    <h1>Weather</h1>
    <div class="weather">
      <div class="header">
        <div class="colCity">
          <h3>City</h3>
          <div class="btnSort">
            <button class="btnSortUp" @click.stop="sortUpCityes"><font-awesome-icon icon="fa-solid fa-arrow-up" /></button>
            <button class="btnSortDown" @click.stop="sortDownCityes"><font-awesome-icon icon="fa-solid fa-arrow-down" /></button>
          </div>
        </div>
        <div class="col">
          <h4>Minimal temperature</h4>
          <div class="btnSort">
            <button class="btnSortUp" @click.stop="sortUpTemperatureMin"><font-awesome-icon icon="fa-solid fa-arrow-up" /></button>
            <button class="btnSortDown" @click.stop="sortDownTemperatureMin"><font-awesome-icon icon="fa-solid fa-arrow-down" /></button>
          </div>
        </div>
        <div class="col">
          <h4>Maximal temperature</h4>
          <div class="btnSort">
            <button class="btnSortUp" @click.stop="sortUpTemperatureMax"><font-awesome-icon icon="fa-solid fa-arrow-up" /></button>
            <button class="btnSortDown" @click.stop="sortDownTemperatureMax"><font-awesome-icon icon="fa-solid fa-arrow-down" /></button>
          </div>
        </div>
      </div>
      <div>
        <city-weather v-for="city of cityes" :key="city.latitude" :city="city"/>
      </div>
    </div>
  </div>
</template>

<script>
import CityWeather from './CityWeather.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'HomeWeather',
  components: {
    CityWeather
  },
  methods: {
      ...mapActions(['getDataFromApi']),
      sortUpCityes () {
        this.cityes.sort(function (a, b) {
          return ('' + b.name).localeCompare(a.name);
      })
      },
      sortDownCityes () {
        this.cityes.sort(function (a, b) {
          return ('' + a.name).localeCompare(b.name);
      })
      },
      sortUpTemperatureMin () {
        this.cityes.sort(function (a, b) {
          return Number(b.tempMin) > Number(a.tempMin);
      })
      },
      sortUpTemperatureMax () {
        this.cityes.sort(function (a, b) {
          return Number(b.tempMax) > Number(a.tempMax);
      })
      },
      sortDownTemperatureMax () {
        this.cityes.sort(function (a, b) {
          return Number(a.tempMax) > Number(b.tempMax);
      })
      },
      sortDownTemperatureMin () {
        this.cityes.sort(function (a, b) {
          return Number(a.tempMin) > Number(b.tempMin);
      })
      }
  },
  computed: {
    ...mapState({
      cityes: state => state.cityes
    })
  },
  async mounted() {
    await this.getDataFromApi();
  }
}
</script>

<style lang="scss" scoped>
  .home {
    .weather {
    width: 80vw;
    border: solid 1px #000;
    .header {
      width: 100%;
      display: flex;
      .col, .colCity {
        position: relative;
        border-left: 1px solid red;
        border-right: 1px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        .btnSort {
          position: absolute;
          border: 1px solid rgb(77, 77, 77);
          border-radius: 50%;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .btnSortUp, .btnSortDown {
            border: none;
            color: #000;
            transition: .3s;
            background: none;
            &:hover {
              color: red;
            }
          }
        }
      }
      .colCity {
        width: 20%;
      }
      .col {
        width: 40%;
      }
    }
  }
  }
</style>