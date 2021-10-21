<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
      :enter-class="`${transitionEnter}`"
      :leave-to-class="`${transitionLeave}`"
    >
      <Create :step="current" :maxSteps="max" v-if="current === 0" />
      <Category :step="current" :maxSteps="max" v-if="current === 1" />
      <Role :step="current" :maxSteps="max" v-if="current === 2" />
      <Interest :step="current" :maxSteps="max" v-if="current === 3" />
      <Finalize :step="current" :maxSteps="max" v-if="current === 4" />
    </transition>
    <div class="navigation">
      <div class="container">
        <button class="" @click="prevView" v-if="current !== 0">go back</button>
        <button class="button" @click="nextView">
          {{ nextText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Create from "./components/Create.vue";
import Interest from "./components/Interest.vue";
import Category from "./components/Category.vue";
import Role from "./components/Role.vue";
import Finalize from "./components/Finalize.vue";

export default {
  name: "App",
  components: {
    Create,
    Interest,
    Category,
    Role,
    Finalize,
  },
  computed: {
    nextText() {
      switch (this.current) {
        case 1:
          return "Roles";
        case 2:
          return "Interests";
        case 3:
        case 4:
          return "Finalize";
        default:
          return "next";
      }
    },
  },
  data() {
    return {
      current: 0,
      max: 5,
      transitionEnter: "fade-enter",
      transitionLeave: "fade-leave-active",
      profil: {
        categories: [],
        roles: [],
        interests: [],
        otherValue: '',
      },
    };
  },
  methods: {
    prevView() {
      this.current--;
      this.transitionEnter = "fade-enter-left";
      this.transitionLeave = "fade-leave-active-left";

      window.setTimeout(function () {
        window.scrollTo(0, 0);
      }, 500);
    },
    nextView() {
      if (this.current === 4) {
        return;
      }

      this.current++;
      this.transitionEnter = "fade-enter";
      this.transitionLeave = "fade-enter";
      window.setTimeout(function () {
        window.scrollTo(0, 0);
      }, 500);
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active,
.fade-leave-active-left,
.fade-enter-left .fade-enter,
.fade-leave-to {
  transition: all 0.5s linear;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.3;
}

.fade-enter {
  transform: translateX(50px);
}
.fade-leave-active {
  transform: translateX(-50px);
}

.fade-enter-left {
  transform: translateX(-50px);
}
.fade-leave-active-left {
  transform: translateX(50px);
}

html,
body,
#app {
  overflow-x: hidden;
}

.step {
  padding-bottom: 80px;
  overflow: hidden;
}

#app {
  max-width: 380px;
  margin: 0 auto;
  padding: 20px 24px 72px;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  overflow: hidden;
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
  z-index: 50;
}

.navigation .container {
  max-width: 340px;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 32px;
  display: flex;
}

button,
input,
textarea {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  -webkit-appearance: none;
}

.button {
  padding: 12px 16px;
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
  margin-left: 0;
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
  margin: 8px 0 20px 0;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #23262f;
}

.Display-name {
  width: 112px;
  height: 24px;
  margin: 0 0 5px 0;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #323d5d;
}

.single-input-field-style {
  width: calc(100% - 32px);
  margin: 4px 0 8px;
  padding: 12px 16px 12px 16px;
  border-radius: 12px;
  background-color: #f4f5fc;
  outline: none;
  border: none;
  box-shadow: none;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #323d5d;
}

input::placeholder,
textarea::placeholder {
  color: #777e90;
}

textarea {
  resize: none;
  height: 128px;
}
</style>
