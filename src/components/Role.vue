<template>
  <div class="step">
    <div class="image">
      <img src="../assets/interest.svg" />
    </div>
    <div class="intro">
      <div class="headline">Your MINT role</div>
      <div class="description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod.
      </div>
    </div>
    <div class="content">
      <div class="roles">
        <div
          class="role"
          v-for="(role, key) in roles"
          v-bind:key="`role-${key}`"
        >
          <span class="icon">
            <font-awesome-icon icon="graduation-cap" />
          </span>
          <span class="title">{{ role }}</span>
        </div>
      </div>
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
import data from "../data/data";

export default {
  name: "Role",
  data() {
    return {
      roles: data.roles,
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

.roles {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  grid-gap: 8px;
  grid-auto-rows: 92px;
}

.role {
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
