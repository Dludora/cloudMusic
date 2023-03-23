<template>
  <main>
    <div class="content-container">
      <div>hello</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Browser"
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