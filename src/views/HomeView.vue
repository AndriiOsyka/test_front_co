<template>
  <div class="homeView">
    <home-weather :cityes="cityes" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import HomeWeather from '../components/HomeWeather.vue'
export default {
  name: 'HomeView',
  components: {
    HomeWeather
  },
  methods: {
      ...mapActions(['getDataFromApi'])
  },
  computed: {
    ...mapState({
      cityes: state => state.cityes
    })
  },
  async created() {
    await this.getDataFromApi();
  }
}
</script>

<style lang="scss" scoped>
  .homeView {
    display: flex;
    justify-content: center;
  }
</style>
