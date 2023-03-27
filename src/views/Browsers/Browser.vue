<template>
  <main>
    <div class="content-container">
      <div>hello</div>
      <Card />
      <Card />
      <Card />
      <Card />
      <div></div>
      <div></div>
      <div></div>
    </div>
  </main>
</template>

<script>
import Card from "../Cards/MusicCard.vue";
export default {
  name: "Browser",
  components: {
    Card
  }
}
</script>

<style scoped lang="scss">
main {
  background-color: $cloud-0-hex;
  .content-container {
    margin: 0 auto;
    max-width: 1680px;
    min-height: 100%;
    width: 100%;

    div {
      height: 300px;
      width: 100%;
    }
  }
}
</style>