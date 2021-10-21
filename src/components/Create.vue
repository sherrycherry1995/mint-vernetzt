<template>
  <div class="profil slide">
    <div class="steps">{{ step + 1 }} of {{ maxSteps }}</div>
    <div class="headline">Create your profile</div>
    <div class="header">
      <div class="image">
        <img src="../assets/avatar.png" />
      </div>
      <div class="upload">Upload a Photo</div>
    </div>
    <div class="input">
      <label for="name" class="Display-name">Display name</label>
      <input
        type="text"
        class="single-input-field-style"
        placeholder="What is your name?"
        v-model="$parent.$data.profil.name"
      />
    </div>
    <div class="input">
      <label for="location" class="Display-name">Location</label>
      <input
        type="location"
        class="single-input-field-style"
        placeholder="Where are you active?"
        v-model="$parent.$data.profil.location"
      />
    </div>
    <div class="input">
      <label for="organisation" class="Display-name">Organisation</label>
      <input
        type="organisation"
        class="single-input-field-style"
        placeholder="What is your organisation?"
        v-model="$parent.$data.profil.organisation"
      />
    </div>
    <div class="input">
      <label for="about" class="Display-name">About me</label>
      <textarea
        type="about"
        class="single-input-field-style"
        placeholder="Say a few words about you and your role in MINT"
        v-model="$parent.$data.profil.about"
      ></textarea>
    </div>
    <div class="subheadline">How can you be contacted?</div>
    <div class="input">
      <label for="email" class="Display-name">E-Mail</label>
      <input
        type="email"
        class="single-input-field-style"
        placeholder="Enter E-Mail"
        v-model="$parent.$data.profil.mail"
      />
    </div>
    <div class="input">
      <label for="website" class="Display-name">Website</label>
      <input
        type="website"
        class="single-input-field-style"
        placeholder="Enter Website"
        v-model="$parent.$data.profil.website"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Profil",
  props: {
    step: Number,
    maxSteps: Number,
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.profil {
  padding-bottom: 40px;
}

.headline {
  text-align: center;
  margin: 32px auto 24px;
  font-family: $second-font;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.32px;
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

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
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

.upload {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #323d5d;
  text-align: center;
  width: calc(100% - 120px);
}
</style>
