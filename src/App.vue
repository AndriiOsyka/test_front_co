<template>
  <HomeView />
</template>

<script>
  import HomeView from "./views/HomeView.vue";

  export default {
    components: {
      HomeView
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
body {
  margin: 0;
  & * {
    font-family: 'Ubuntu', sans-serif;
   -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

#app {
  text-align: center;
  background-color: #dde7fff9;
  color: #323035;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}
</style>
