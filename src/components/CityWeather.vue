<template>
    <div class="cityWeather">
      <h4>{{city.name}}</h4>
      <h5>{{city.minTemp}}</h5>
      <h5>{{city.maxTemp}}</h5>
      <button @click="deleteCity" class="btnDelete">x</button>
    </div>
  </template>
  
  <script>
  import { mapMutations } from 'vuex';

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
    methods: {
      ...mapMutations(["DELETE_CITY"]),
      deleteCity () {
        this.DELETE_CITY(this.city.name);
      }
    },
    async mounted() {
      await Object.keys(this.city).length > 0
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .cityWeather {
      border: solid 1px rgb(0, 89, 255);
      display: flex;
      position: relative;
      h4 {
        width: 20%;
        border-right: 1px solid red;
        border-left: 1px solid red;
      }
      h5 {
        width: 40%;
        border-right: 1px solid red;
        border-left: 1px solid red;
      }
      .btnDelete {
        width: 10px;
        height: 10px;
        background: #000;
        color: red;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
      }
    }
  </style>