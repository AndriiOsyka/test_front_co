<template>
    <div class="cityWeather">
      <div>{{city.name}}</div>
      <div>{{city.minTemp}}</div>
      <div>{{city.maxTemp}}</div>
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
      display: grid;
      grid-template-columns: 30% 35% 35%;
      position: relative;
      border-radius: 5px;
      border: 1px solid #42336a;
      background: #eeebf7;
      margin: 0 0 10px;
      padding: 10px 0;
      transition: all .3s;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.15);
        .btnDelete {
          display: block;
        }
      }
      div {
        font-size: 16px;
        text-transform: uppercase;
        color: #242225;
      }
      .btnDelete {
        cursor: pointer;
        background: none;
        display: none;
        font-size: 18px;
        color: #6d6c6a;
        border: none;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        transition: .5s;
        &:hover {
          color: #42336a;
        }
      }
    }
  </style>