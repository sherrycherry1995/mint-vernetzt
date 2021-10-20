<template>
  <div class="profil">
    <font-awesome-icon icon="user-secret" />
    <div class="profil-picture"></div>
    <input type="text" v-model="name">
  </div>
</template>
<script>

export default {
  name: "Profil",
  data() {
    return {
      name: '',
    };
  },
  methods: {
    
  }
};
</script>
<style lang="scss">
</style>
