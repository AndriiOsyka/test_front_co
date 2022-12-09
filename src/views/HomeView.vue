<template>
  <div class="home">
    {{cityes}}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import '../store/index'
export default {
  name: 'HomeView',
  methods: {
      ...mapActions(['GET_DATA_FROM_API'])
  },
  computed: {
    cityes: () => {
      return this.store.state.cityes
    }
  },
  async created() {
    await this.GET_DATA_FROM_API();
    console.log(this.store.state.cityes)
  }
}
</script>
