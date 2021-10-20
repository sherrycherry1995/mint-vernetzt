<template>
  <div class="interest">
    <img src="../assets/interest.png" />
    <div class="Rectangle">
      <span class="Select-your-interest"> Select your interests </span>
    </div>
    <div class="navigation">
      <div class="container">
        <button class="go-back" @click="prev">go back</button>
        <button class="button" @click="next">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Role",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    prev() {
      this.$parent.changeView("category");
    },
    next() {
      this.$parent.changeView("interest");
    },
  },
};
</script>
<style lang="scss" scoped>
.Rectangle {
  width: 390px;
  height: 508px;
  margin: 25px 0 0;
  padding: 14px 32px 0;
  border-radius: 16px;
  box-shadow: 0 4px 14px 1px #b1b5c3;
  background-color: #f4f5f6;
}
.Select-your-interest {
  width: 326px;
  height: 40px;
  margin: 0 0 8px;
  background-color: #23262f;
  font-family: DMSans;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: #23262f;
}

.button {
  padding: 16px 32px;
  margin-left: auto;
}
</style>
