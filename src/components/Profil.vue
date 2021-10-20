<template>
  <div class="profil">
    <!-- <font-awesome-icon icon="user-secret" /> -->
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
      <input
        type="location"
        class="single-input-field-style"
        value="Conrad"
      />
    </div>
     <div class="input">
       <label for="location" class="Display-name">Location</label>
      <input
        type="location"
        class="single-input-field-style"
        value="Conrad"
      />
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
      <textarea
        type="about"
        class="single-input-field-style"
        value="Conrad"
      />
    </div>
    <div class="button">Next</div>
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
  methods: {},
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}

.Rectangle {
  width: 104px;
  height: 104px;
  margin: 0 63px;
  padding: 24px 13px 20.9px;
  border-radius: 50%;
  background-color: #3b71fe;
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
  margin: 5px 0 0;
  padding: 12px 15px 12px 16px;
  border-radius: 12px;
  background-color: #f4f5fc;
  outline: none;
  border: none;
  box-shadow: none;
}

.button {
  width: 310px;
  padding: 14px 31.1px 18px 33px;
  border-radius: 12px;
  background-color: #3b71fe;
  color: white;
  text-align: center;
  margin-top: 33px;
  margin-bottom: 33px;
}
</style>
