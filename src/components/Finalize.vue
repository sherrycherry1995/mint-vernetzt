<template>
  <div class="step slide">
    <div class="steps">{{ step + 1 }} of {{ maxSteps }}</div>
    <div class="header">
      <div class="image">
        <img src="../assets/interest.svg" />
      </div>
      <div class="headline">Hi, I'm Mira McCormick</div>
    </div>

    <div class="intro">
      <div class="description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod.
      </div>
    </div>
    <div class="divider"></div>
    <div class="content">
      <div class="information">
        <span class="label">Active in</span>
        <div class="detail">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#738FD3" fill-rule="evenodd">
                <path
                  d="M17.25 10.5a5.25 5.25 0 1 0-10.5 0c0 1.622.718 3.225 1.769 4.683 1.043 1.448 2.325 2.63 3.239 3.378.15.123.334.123.484 0 .914-.748 2.196-1.93 3.24-3.378 1.05-1.458 1.768-3.06 1.768-4.683zm1.5 0a6.75 6.75 0 1 0-13.5 0c0 4.119 3.619 7.634 5.557 9.222a1.864 1.864 0 0 0 2.386 0c1.938-1.588 5.557-5.103 5.557-9.222z"
                />
                <path
                  d="M10.5 10.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm1.5-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                />
              </g>
            </svg>
            Leipzig
          </span>
        </div>
        <span class="label">Expertise</span>
        <div class="detail">
          <span
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#738FD3" fill-rule="evenodd">
                <path
                  d="M8.25 5.25a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5V6.75a1.5 1.5 0 0 0-1.5-1.5h-7.5zm-3 1.5v10.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-7.5a3 3 0 0 0-3 3z"
                />
                <path
                  d="M8.25 7.5c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0-.75.75zm1.5 3a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0zm3 0a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0zm2.25.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM9.75 13.5a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0zm2.25.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3.75-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0zM9 17.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3.75-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0zm2.25.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"
                />
              </g>
            </svg>
            Mathematik
          </span>
          <span
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#738FD3" fill-rule="evenodd">
                <path
                  d="M10 16.5V18h1.333v-1.5h1.334V18h.666c.369 0 .667.336.667.75s-.298.75-.667.75H8c-.368 0-.667-.336-.667-.75S7.632 18 8 18h.667v-1.5H10z"
                  fill-rule="nonzero"
                />
                <path
                  d="M5.333 13.5c0 .828.597 1.5 1.334 1.5h8c.736 0 1.333-.672 1.333-1.5v-6c0-.828-.597-1.5-1.333-1.5h-8c-.737 0-1.334.672-1.334 1.5v6zm1.334 3h8c1.472 0 2.666-1.343 2.666-3v-6c0-1.657-1.194-3-2.666-3h-8C5.194 4.5 4 5.843 4 7.5v6c0 1.657 1.194 3 2.667 3z"
                />
                <path
                  d="M6.667 8.25c0 .414.298.75.666.75H12c.368 0 .667-.336.667-.75S12.368 7.5 12 7.5H7.333c-.368 0-.666.336-.666.75zm0 3c0 .414.298.75.666.75h1.334c.368 0 .666-.336.666-.75s-.298-.75-.666-.75H7.333c-.368 0-.666.336-.666.75z"
                />
              </g>
            </svg>
            Informatik
          </span>
        </div>
        <span class="label">Role</span>
        <div class="detail">
          <span
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9.7 10.021-3.563.285a.525.525 0 0 0-.299.922l2.711 2.314c.15.128.216.33.17.521l-.829 3.46a.525.525 0 0 0 .784.572l3.053-1.858a.525.525 0 0 1 .546 0l3.053 1.858a.525.525 0 0 0 .784-.571l-.829-3.46a.525.525 0 0 1 .17-.522l2.71-2.314a.525.525 0 0 0-.298-.922L14.3 10.02a.525.525 0 0 1-.443-.32l-1.373-3.29a.525.525 0 0 0-.97 0L10.143 9.7a.525.525 0 0 1-.443.32zm4.169-4.189c-.693-1.66-3.045-1.66-3.738 0L8.987 8.573l-2.97.237c-1.797.144-2.524 2.389-1.152 3.56l2.256 1.925-.69 2.88c-.419 1.75 1.484 3.137 3.022 2.201L12 17.826l2.547 1.55c1.538.936 3.441-.45 3.022-2.201l-.69-2.88 2.256-1.926c1.372-1.17.645-3.415-1.153-3.559l-2.969-.237-1.144-2.74z"
                fill="#738FD3"
                fill-rule="evenodd"
              />
            </svg>
            Ehrenamt
          </span>
          <span
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9.7 10.021-3.563.285a.525.525 0 0 0-.299.922l2.711 2.314c.15.128.216.33.17.521l-.829 3.46a.525.525 0 0 0 .784.572l3.053-1.858a.525.525 0 0 1 .546 0l3.053 1.858a.525.525 0 0 0 .784-.571l-.829-3.46a.525.525 0 0 1 .17-.522l2.71-2.314a.525.525 0 0 0-.298-.922L14.3 10.02a.525.525 0 0 1-.443-.32l-1.373-3.29a.525.525 0 0 0-.97 0L10.143 9.7a.525.525 0 0 1-.443.32zm4.169-4.189c-.693-1.66-3.045-1.66-3.738 0L8.987 8.573l-2.97.237c-1.797.144-2.524 2.389-1.152 3.56l2.256 1.925-.69 2.88c-.419 1.75 1.484 3.137 3.022 2.201L12 17.826l2.547 1.55c1.538.936 3.441-.45 3.022-2.201l-.69-2.88 2.256-1.926c1.372-1.17.645-3.415-1.153-3.559l-2.969-.237-1.144-2.74z"
                fill="#738FD3"
                fill-rule="evenodd"
              />
            </svg>
            Dozentin
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
            <font-awesome-icon icon="graduation-cap" />
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
</template>
<script>
import data from "../data/data";

export default {
  name: "Finalize",
  props: {
    step: Number,
    maxSteps: Number,
  },
  data() {
    return {
      interests: data.selected,
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
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
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
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.headline {
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
  grid-template-columns: minmax(0, 1fr) minmax(0, 3fr);
  grid-gap: 16px 12px;
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

  span > svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
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
    max-width: 100%;
    max-width: calc(100% - 32px);
    hyphens: auto;
    word-wrap: break-word;
  }
}

.social {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 32px;
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
