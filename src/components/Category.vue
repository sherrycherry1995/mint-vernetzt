<template>
  <div class="step slide">
    <div class="steps">{{ step + 1 }} of {{ maxSteps }}</div>
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
          v-bind:class="
            profilCategories.indexOf(category) === -1
              ? 'category'
              : 'category active'
          "
          v-for="(category, key) in categories"
          v-bind:key="`category-${key}`"
          :data-key="`category-${key}`"
          @click="updateCategories(category, key)"
        >
          <span class="icon" v-html="category.icon"> </span>
          <span class="title">{{ category.title }}</span>
        </div>
      </div>
      <transition name="fading">
        <div class="input" v-if="selectedOther">
          <label for="website" class="Display-name">Other</label>
          <input
            type="website"
            class="single-input-field-style"
            placeholder="Where are you active in?"
            v-model="$parent.$data.profil.otherValue"
          />
        </div>
      </transition>
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
      profilCategories: this.$parent.$data.profil.categories,
      other: {
        title: "Sonstige",
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="m9.7 10.021-3.563.285a.525.525 0 0 0-.299.922l2.711 2.314c.15.128.216.33.17.521l-.829 3.46a.525.525 0 0 0 .784.572l3.053-1.858a.525.525 0 0 1 .546 0l3.053 1.858a.525.525 0 0 0 .784-.571l-.829-3.46a.525.525 0 0 1 .17-.522l2.71-2.314a.525.525 0 0 0-.298-.922L14.3 10.02a.525.525 0 0 1-.443-.32l-1.373-3.29a.525.525 0 0 0-.97 0L10.143 9.7a.525.525 0 0 1-.443.32zm4.169-4.189c-.693-1.66-3.045-1.66-3.738 0L8.987 8.573l-2.97.237c-1.797.144-2.524 2.389-1.152 3.56l2.256 1.925-.69 2.88c-.419 1.75 1.484 3.137 3.022 2.201L12 17.826l2.547 1.55c1.538.936 3.441-.45 3.022-2.201l-.69-2.88 2.256-1.926c1.372-1.17.645-3.415-1.153-3.559l-2.969-.237-1.144-2.74z" fill="#738FD3" fill-rule="evenodd"/></svg>',
      },
    };
  },
  computed: {
    selectedOther() {
      return (
        this.profilCategories.filter((el) => el.title === "Sonstige").length > 0
      );
    },
  },
  methods: {
    updateCategories(category) {
      let categories = this.$parent.$data.profil.categories;
      let index = categories.indexOf(category);

      if (index !== -1) {
        this.$parent.$data.profil.categories.splice(index, 1);
        return;
      }

      this.$parent.$data.profil.categories.push(category);
    },
  },
};
</script>
<style lang="scss" scoped>
.fading-enter-active,
.fading-leave-active {
  transition: opacity 0.5s;
}
.fading-enter, .fading-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

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

.categories {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 8px;
  grid-auto-rows: 72px;
}

.category {
  padding: 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background-color: #e6ecfc;
  transition: border 0.3s ease;
  cursor: pointer;

  &.active {
    border: solid 1px #7290d5;
  }

  @media (hover: hover) {
    &:hover {
      border: solid 1px #7290d5;
    }
  }

  @media (hover: none) {
   &:hover {
      border: none;
    }
  }

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

.input {
  margin-top: 16px;
}
</style>
