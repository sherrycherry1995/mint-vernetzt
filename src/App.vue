<template>
  <div id="app">
    <div class="content-steps">
        <Profil :step="current" :maxSteps="max" v-if="current === 0" />
        <Category :step="current" :maxSteps="max" v-if="current === 1"/>
        <Role :step="current" :maxSteps="max" v-if="current === 2"/>
        <Interest :step="current" :maxSteps="max" v-if="current === 3" />
    </div>
    <div class="navigation">
      <div class="container">
        <button class="" @click="prevView" v-if="current !== 0">go back</button>
        <button class="button" @click="nextView" v-if="current !== max">Next</button>
      </div>
    </div>
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
      current: 0,
      max: 4,
    };
  },
  methods: {
    prevView() {
      this.current--;
    },
    nextView() {
      this.current++;
    },
  },
};
</script>
<style>
#app {
  max-width: 380px;
  margin: 0 auto;
  padding: 20px 24px 40px;
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
  max-width: 340px;
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

.button:first-child:last-child {
  width: calc(100% - 32px);
  margin-left:0;
}

.button:last-child {
  margin-left: auto;
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

.steps {
  margin: 8px 0 8px 0;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #23262f;
}
</style>
