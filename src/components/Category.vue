<template>
  <div class="step slide">
     <div class="steps">{{ step + 1}} of {{maxSteps}}</div>
    <div class="image">
      <img src="../assets/category.png" />
    </div>
    <div class="intro">
      <div class="headline">Which MINT are you?</div>
      <div class="description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod.
      </div>
    </div>
    <div class="content">
      <div class="categories">
        <div
          class="category"
          v-for="(category, key) in categories"
          v-bind:key="`category-${key}`"
        >
          <span class="icon">
            <font-awesome-icon icon="graduation-cap" />
          </span>
          <span class="title">{{ category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "../data/data";

export default {
  name: "Category",
  props: {
    step: Number,
    maxSteps: Number,
  },
  data() {
    return {
      categories: data.categories,
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

.categories {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 8px;
  grid-auto-rows: 72px;
}

.category {
  padding: 12px 24px;
  border-radius: 16px;
  border: solid 1px #8f9bb9;
  background-color: #f4f5fc;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  .icon {
    width: 64px;
  }

  .icon > svg {
    display: block;
    width: 100%;
  }

  .title {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: center;
    color: #7a8ab3;
    max-width: calc(100% - 32px);
    hyphens: auto;
    word-wrap: break-word;
  }
}
</style>
