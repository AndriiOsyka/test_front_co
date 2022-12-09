<template>
    <div class="cityWeather">
      <h4>{{city.name}}</h4>
      <h5>{{city.minTemp}}</h5>
      <h5>{{city.maxTemp}}</h5>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'CityWeather',
    props: {
      city: {
        type: Object,
        default() {
          {null}
        }
      }
    },
    created() {
        console.log(this.city.maxTemp);
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .cityWeather {
      border: solid 1px rgb(0, 89, 255);
      h4 {
        width: 20%;
      }
    }
  </style>