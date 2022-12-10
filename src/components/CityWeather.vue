<template>
    <div class="cityWeather">
      <h4>{{city.name}}</h4>
      <h5>{{city.minTemp}}</h5>
      <h5>{{city.maxTemp}}</h5>
      <button @click="deleteCity" class="btnDelete"><font-awesome-icon icon="fa-solid fa-trash" /></button>
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
        margin: 0;
        padding: 20px 0;
      }
      h5 {
        width: 40%;
        border-right: 1px solid red;
        border-left: 1px solid red;
        margin: 0;
        padding: 20px 0;
      }
      .btnDelete {
        cursor: pointer;
        width: 10px;
        height: 10px;
        color: #000;
        border: none;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        transition: .5s;
        &:hover {
          color: red;
        }
      }
    }
  </style>