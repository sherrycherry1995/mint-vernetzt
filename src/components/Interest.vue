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
          v-bind:class="
            profilInterests.indexOf(interest) === -1
              ? 'interest'
              : 'interest active'
          "
          v-for="(interest, key) in interests"
          v-bind:key="`interest-${key}`"
          :data-key="`interest-${key}`"
          @click="updateInterests(interest, key)"
        >
          <span class="icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9.7 10.021-3.563.285a.525.525 0 0 0-.299.922l2.711 2.314c.15.128.216.33.17.521l-.829 3.46a.525.525 0 0 0 .784.572l3.053-1.858a.525.525 0 0 1 .546 0l3.053 1.858a.525.525 0 0 0 .784-.571l-.829-3.46a.525.525 0 0 1 .17-.522l2.71-2.314a.525.525 0 0 0-.298-.922L14.3 10.02a.525.525 0 0 1-.443-.32l-1.373-3.29a.525.525 0 0 0-.97 0L10.143 9.7a.525.525 0 0 1-.443.32zm4.169-4.189c-.693-1.66-3.045-1.66-3.738 0L8.987 8.573l-2.97.237c-1.797.144-2.524 2.389-1.152 3.56l2.256 1.925-.69 2.88c-.419 1.75 1.484 3.137 3.022 2.201L12 17.826l2.547 1.55c1.538.936 3.441-.45 3.022-2.201l-.69-2.88 2.256-1.926c1.372-1.17.645-3.415-1.153-3.559l-2.969-.237-1.144-2.74z"
                fill="#738FD3"
                fill-rule="evenodd"
              />
            </svg>
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
      profilInterests: this.$parent.$data.profil.interests,
    };
  },
  methods: {
    updateInterests(interest) {
      let interests = this.$parent.$data.profil.interests;
      let index = interests.indexOf(interest);
      if (index !== -1) {
        this.$parent.$data.profil.interests.splice(index, 1);
        return;
      }

      this.$parent.$data.profil.interests.push(interest);
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: border 0.3s ease;
  cursor: pointer;
  background-color: #e6ecfc;

  &.active {
    border: solid 1px #7290d5;
  }


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
    text-align: center;
    color: #738fd3;
  }
}
</style>
