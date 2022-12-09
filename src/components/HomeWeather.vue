<template>
  <div class="home">
    <div class="header">
      <h3>City</h3>
      <h4>Minimal temperature</h4>
      <h4>Maximal temperature</h4>
    </div>
    <div>
      <city-weather v-for="city of cityes" :key="city.latitude" :city="city"/>
    </div>
  </div>
</template>

<script>
import CityWeather from './CityWeather.vue'

export default {
  name: 'HomeWeather',
  components: {
    CityWeather
  },
  props: {
    cityes: {
      type: Object,
      default() {
        {null}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 80%;
    border: solid 1px #000;
    .header {
      width: 100%;
      display: flex;
      h3 {
        width: 20%;
      }
      h4 {
        width: 40%;
      }
    }
  }
</style>