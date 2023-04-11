<template>
    <main class="search">
        <h1>浏览类别</h1>
        <div class="container">

        </div>
    </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.search {
  width: 100%;
  min-height: inherit;

  h1 {
    font-size: 2.5rem;
    position: relative;
    color: $cloud-2-hex;
    margin-bottom: 0;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: rgba($cloud-2-hex, 0.5);
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1;
    }
  }


  .container {
    display: grid;
    grid-auto-columns: 32rem;
    //grid-column-gap: calc((100% - 19.5rem * 5) / (5 - 1));
    grid-template-columns: repeat(3, 1fr);

  }
}
</style>