<template>
  <div class="step">
     <div class="image">
      <img src="../assets/interest.png" />
    </div>
    <div class="intro">
      <div class="headline">Your MINT role</div>
      <div class="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</div>
    </div>
    <div class="content">
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
.image {
  width: 270px;
  height: 200px;
  margin: 20px auto 32px;
}

.image img {
  display: block;
  width: 100%;
  height: 1005;
  object-fit: contain;
}

.headline {
  margin: 32px auto 8px;
  font-family: $second-font;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: #23262f;
}

.description {
  margin: 8px auto 33px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: center;
  color: #23262f;
}

.button {
  padding: 12px 32px;
  margin-left: auto;
}
</style>
