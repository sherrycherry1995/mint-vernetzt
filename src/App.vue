<template>
  <div id="app">
    <Profil v-if="current === 'profil'"/>
    <Interest v-if="current === 'interest'" />
  </div>
</template>

<script>
import Profil from './components/Profil.vue';
import Interest from './components/Interest.vue';

export default {
  name: 'App',
  components: {
    Profil,
    Interest
  }, 
  data(){
    return {
      current : 'interest',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
