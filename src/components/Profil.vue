<template>
  <div class="profil slide">
    <div class="steps">{{ step + 1}} of {{maxSteps}}</div>
    <div class="image">
      <img src="../assets/interest.svg" />
    </div>
    <div class="headline">Create your profile</div>
    <div class="input">
      <label for="name" class="Display-name">Display name</label>
      <input
        type="text"
        class="single-input-field-style"
        value="Edgar Runolfsdottir"
      />
    </div>
    <div class="input">
      <label for="location" class="Display-name">Location</label>
      <input type="location" class="single-input-field-style" value="Conrad" />
    </div>
    <div class="input">
      <label for="location" class="Display-name">Location</label>
      <input type="location" class="single-input-field-style" value="Conrad" />
    </div>
    <div class="input">
      <label for="organisation" class="Display-name">Organistaion</label>
      <input
        type="organisation"
        class="single-input-field-style"
        value="Conrad"
      />
    </div>
    <div class="input">
      <label for="about" class="Display-name">About me</label>
      <textarea type="about" class="single-input-field-style">Text</textarea>
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
  data() {
    return {
      name: "",
    };
  },
};
</script>
<style lang="scss" scoped>
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
  margin-bottom: 24px;
}

.image {
  height: 104px;
  width: 104px;
  border-radius: 50%;
  margin: 14px auto 32px;
  overflow: hidden;
}

.image > img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: block;
}

.Display-name {
  width: 112px;
  height: 24px;
  margin: 0 0 5px 0;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #323d5d;
}

.single-input-field-style {
  width: calc(100% - 32px);
  margin: 4px 0 8px;
  padding: 12px 16px 12px 16px;
  border-radius: 12px;
  background-color: #f4f5fc;
  outline: none;
  border: none;
  box-shadow: none;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #323d5d;
}

textarea {
  resize: none;
  height: 150px;
}
</style>
