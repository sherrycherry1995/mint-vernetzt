<template>
  <div class="step slide">
    <div class="steps">{{ step + 1 }} of {{ maxSteps }}</div>
    <div class="headline">Finalize your profile</div>
    <div class="profil">
      <div class="container">
        <div class="header">
          <div class="image">
            <img src="../assets/avatar.png" />
          </div>
          <div class="headline">Hi, I'm {{ name }}</div>
        </div>

        <div class="intro">
          <div class="description">
            {{ about }}
          </div>
        </div>
        <div class="divider"></div>
        <div class="content">
          <div class="information">
            <span class="label">Organisation</span>
            <div class="detail">
              <span class="text">{{ organisation }}</span>
            </div>
            <span class="label">Website</span>
            <div class="detail">
              <span class="text">{{ website }}</span>
            </div>
            <span class="label">E-Mail</span>
            <div class="detail">
              <span class="text">{{ mail }}</span>
            </div>
            <span class="label">Active in</span>
            <div class="detail">
              <span
                class="category"
                v-for="(category, key) in categories"
                v-bind:key="`category-${key}`"
                :data-key="`category-${key}`"
              >
                <span class="icon" v-html="category.icon"> </span>
                <span class="title">{{ category.title === 'Sonstige' ? $parent.$data.profil.otherValue : category.title }}</span>
              </span>
            </div>
            <span class="label">Role</span>
            <div class="detail">
              <span v-for="(role, key) in roles" v-bind:key="`role-${key}`">
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
                {{role}}
              </span>
            </div>
          </div>
          <div class="subheadline">Interests</div>
          <div class="interests">
            <div
              class="interest"
              v-for="(interest, key) in interests"
              v-bind:key="`interest-${key}`"
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
        <div class="divider"></div>
        <div class="social">
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 9.666C.374 9.67-.516 11.24.333 12.43c1.216 1.703 3.42 3.07 7.102 3.07 5.704 0 10.283-4.649 9.642-10.14l.939-1.879c.651-1.302-.48-2.784-1.909-2.499l-1.24.249a6.208 6.208 0 0 0-.96-.4C13.337.646 12.651.5 12.015.5c-1.14 0-2.125.293-2.908.88-.773.58-1.21 1.344-1.448 2.044-.11.323-.184.647-.231.958a8.421 8.421 0 0 1-1.336-.556C5.09 3.306 4.279 2.65 3.822 2.071c-.768-.968-2.394-.896-2.964.363C.053 4.208.274 6.31.997 8.01a8.21 8.21 0 0 0 .943 1.654l-.19.002zm5.683 4.167c-3.219 0-4.884-1.166-5.744-2.372a.081.081 0 0 1 .066-.128c.876-.002 2.674-.044 3.86-.738.06-.036.047-.126-.02-.149-2.764-.929-4.335-4.864-3.22-7.324a.082.082 0 0 1 .14-.016C3.79 4.714 6.575 6.29 9 6.332a.085.085 0 0 0 .084-.098c-.098-.634-.47-4.067 2.934-4.067.813 0 2.022.396 2.468.802.02.02.048.028.076.022l1.872-.374a.083.083 0 0 1 .091.119l-1.161 2.322a.085.085 0 0 0-.008.053c.814 4.572-2.931 8.722-7.922 8.722z"
              fill="#777E90"
              fill-rule="evenodd"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#777E90" fill-rule="evenodd">
              <path
                d="M12.433 2.333H5.767a3.333 3.333 0 0 0-3.334 3.334v6.666a3.333 3.333 0 0 0 3.334 3.334h6.666a3.333 3.333 0 0 0 3.334-3.334V5.667a3.333 3.333 0 0 0-3.334-3.334zM5.767.667a5 5 0 0 0-5 5v6.666a5 5 0 0 0 5 5h6.666a5 5 0 0 0 5-5V5.667a5 5 0 0 0-5-5H5.767z"
              />
              <path
                d="M13.267 5.667a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667z"
                fill-rule="nonzero"
              />
              <path
                d="M13.267 9a4.167 4.167 0 1 1-8.334 0 4.167 4.167 0 0 1 8.334 0zM11.6 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
              />
            </g>
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#777E90" fill-rule="evenodd">
              <path
                d="M9.1 15.667a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333zm0 1.666A8.333 8.333 0 1 0 9.1.667a8.333 8.333 0 0 0 0 16.666z"
              />
              <path
                d="M9.1 7.333c0-.46.373-.833.833-.833h.834a.833.833 0 1 0 0-1.667h-.834a2.5 2.5 0 0 0-2.5 2.5V9H6.6a.833.833 0 1 0 0 1.667h.833v5a.833.833 0 1 0 1.667 0v-5h1.667a.833.833 0 1 0 0-1.667H9.1V7.333z"
                fill-rule="nonzero"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Finalize",
  props: {
    step: Number,
    maxSteps: Number,
  },
  data() {
    return {
      name: this.$parent.profil.name,
      about: this.$parent.profil.about,
      location: this.$parent.profil.location,
      mail: this.$parent.profil.mail,
      organisation: this.$parent.profil.organisation,
      website: this.$parent.profil.website,
      categories: this.$parent.profil.categories,
      roles: this.$parent.profil.roles,
      interests: this.$parent.profil.interests,
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
.step {
  padding-bottom: 0;
}

.profil {
  margin: 16px 0 0;
  padding: 40px 0 0;
  border-radius: 16px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.17);
  width: calc(100% + 2px);
  margin-left: -1px;
  padding-left: 1px;
  height: 100%;
  padding-bottom: 40px;
}

.profil > .container {
  max-width: 340px;
  width: calc(100% - 2px);
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  .headline {
      width: calc(100% - 124px);
  }
}

.image {
  width: 112px;
  height: 112px;
  margin-right: 16px;
  border-radius: 60px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.17);
  overflow: hidden;
  flex-shrink: 0;
}

.image img {
  display: block;
  width: 130%;
  height: 130%;
  object-fit: cover;
  margin-top: -12%;
  margin-left: -12%;
}

.headline {
  font-family: $second-font;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #23262f;
}

.subheadline {
  margin: 12px 0 8px;
  font-family: $second-font;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #23262f;
}

.description {
  margin: 16px auto 32px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: left;
  color: #23262f;
}

.divider {
  width: 100%;
  height: 1px;
  margin: 16px auto 16px;
  background-color: #e6e8ec;
}

.information {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 3fr);
  grid-gap: 16px 16px;
}

.information .detail {
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 24px;
    margin: 0 0 0 8px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #738fd3;
  }

  span.text {
    padding-left: 8px;
  }

  & > span > svg {
    margin-right: 8px;
  }

  span:not(.icon) > svg, span .icon {
    width: 24px;
    height: 24px;
  }

  .category  > .icon{
    margin: 0;
  }

  .icon > svg {
    width: 100%;
    height: 100%;
  }


  span:not(:last-child) {
    margin-bottom: 8px;
  }
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
  background-color: #e6ecfc;

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

.social {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  padding-bottom: 32px;
  width: 100%;

  > svg {
    margin-left: 16px;
    margin-right: 16px;
    height: 16px;
    width: 16px;
  }
}
</style>
