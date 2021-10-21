<template>
  <div class="step slide">
    <div class="steps">{{ step + 1 }} of {{ maxSteps }}</div>
    <div class="image">
      <img src="../assets/interest.svg" />
    </div>
    <div class="intro">
      <div class="headline">Select your interests</div>
      <div class="description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod.
      </div>
    </div>
    <div class="content">
      <div class="interests">
        <div
          class="interest"
          v-for="(interest, key) in interests"
          v-bind:key="`interest-${key}`"
        >
          <span class="icon">
            <font-awesome-icon icon="graduation-cap" />
          </span>
          <span class="title">{{ interest }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "../data/data";

export default {
  name: "Interest",
  props: {
    step: Number,
    maxSteps: Number,
  },
  data() {
    return {
      interests: data.interests,
    };
  },
  methods: {
    prev() {
      this.$parent.prevView();
    },
    next() {
      this.$parent.nextView();
    },
  },
};
</script>
<style lang="scss" scoped>
.image {
  width: 220px;
  height: 162px;
  margin: 16px auto 32px;
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
 color: #777e90;
}

.interests {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  grid-gap: 16px;
  grid-auto-rows: 92px;
}

.interest {
  padding: 16px 0;
  border-radius: 16px;
  border: solid 1px #8f9bb9;
  background-color: #f4f5fc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .icon {
  }

  .title {
    font-family: Poppins;
    font-size: 11px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.82;
    letter-spacing: normal;
    color: #738fd3;
    max-width: 100%;
    max-width: calc(100% - 32px);
    hyphens: auto;
    word-wrap: break-word;
  }
}
</style>
