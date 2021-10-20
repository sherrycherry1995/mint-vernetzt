<template>
  <div id="app">
    <Profil v-if="current === 'profil'" />
    <Category v-if="current === 'category'" />
    <Role v-if="current === 'role'" />
    <Interest v-if="current === 'interest'" />
  </div>
</template>

<script>
import Profil from "./components/Profil.vue";
import Interest from "./components/Interest.vue";
import Category from "./components/Category.vue";
import Role from "./components/Role.vue";

export default {
  name: "App",
  components: {
    Profil,
    Interest,
    Category,
    Role,
  },
  data() {
    return {
      current: "profil",
    };
  },
  methods: {
    changeView(view) {
      this.current = view;
    },
  },
};
</script>
<style>
#app {
  max-width: 380px;
  margin: 0 auto;
  padding: 20px 24px 120px;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}

.navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: white;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.17);
}

.navigation .container {
  max-width: 380px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
}

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.button {
  padding: 16px 32px 16px 32px;
  border-radius: 12px;
  background-color: #3b71fe;
  color: white;
  text-align: center;
  font-family: $second-font;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.8;
  letter-spacing: normal;
  text-align: center;
  color: #f4f5f6;
  cursor: pointer;
}

.go-back {
  width: 90.7px;
  height: 20px;
  margin: 10px 147.3px 10px 0;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #23262f;
}
</style>
