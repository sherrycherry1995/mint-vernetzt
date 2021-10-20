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
  max-width: 380px;
  margin: 0 auto;
  padding: 40px;
}
</style>
