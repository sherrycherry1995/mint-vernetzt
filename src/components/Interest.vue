<template>
  <div class="interest">
    <img src="../assets/interest.png"/>
    <div class="Rectangle">
      <span class="Select-your-interest">
        Select your interests
      </span>
    </div>
  </div>
</template>
<script>

export default {
  name: "Interest",
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
</style>
