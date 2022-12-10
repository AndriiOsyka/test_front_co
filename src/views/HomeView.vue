<template>
  <div class="homeView">
    <home-weather />
  </div>
</template>

<script>
import HomeWeather from '../components/HomeWeather.vue'
export default {
  name: 'HomeView',
  components: {
    HomeWeather
  },
}
</script>

<style lang="scss" scoped>
  .homeView {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
