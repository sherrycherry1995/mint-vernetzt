<template>
  <div class="home">
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
export default {
  name: "Home",
  data: function () {
    return {
      title: "MINTvernetzt Hackathon Matchingtool",
    };
  },
};
</script>
<style lang="scss">
h1 {
  color: $headline-color;
}
</style>
