<template>
  <div class="profil">
    <h1>Create your profile</h1>
    <div class="Rectangle"></div>
    <span class="Upload-a-picture"> Upload a picture </span>
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
    <div class="navigation">
      <div class="container">
      <button class="button" @click="next">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profil",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    next(){
      this.$parent.changeView('category')
    }
  },
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
  margin: 32px 24px 24px;
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

.Rectangle {
  width: 104px;
  height: 104px;
  margin: 0 63px;
  padding: 24px 13px 20.9px;
  border-radius: 50%;
  background-color: #3b71fe;
}

.Display-name {
  width: 112px;
  height: 24px;
  margin: 0 198px 5px 0;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #323d5d;
}

.Upload-a-picture {
  width: 230px;
  height: 24px;
  margin: 104px 0 0;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: center;
  color: #353945;
}

.single-input-field-style {
  width: 100%;
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

.button {
   width: 100%;
}

textarea {
  resize: none;
  height: 150px;
}
</style>
