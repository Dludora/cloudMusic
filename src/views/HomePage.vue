<template>
  <div class="sidebar">
    <div class="header">
      <n-image src=""></n-image>
      <span>MUSIC</span>
    </div>
  </div>
  <div class="scrollable-page">
    <div class="player-bar">

    </div>
    <main></main>
  </div>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
.sidebar {
  height: 100%;
  float: left;
  width: 260px;
  background-color: $Elements-Icy-Cocoon-1-hex;
  //border-right: 1px solid $Elements-Icy-Cocoon-2-hex;
  box-shadow: 1px 0 1px rgba(0, 0, 0, 0.25);
  z-index: 900;

  padding: 20px 20px;

  .header {
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    font-weight: 800;
  }
}

.scrollable-page {
  padding-top: 54px;
  scroll-padding-top: 54px;
  position: relative;
  margin-left: 260px;
  //background-color: $Elements-Icy-Cocoon-1-hex;

  .player-bar {
    position: fixed;
    top: 0;
    width: calc(100% - 260px);
    height: 54px;
    background-color: rgba(160, 195, 216, 0.9);
    box-shadow: 4px 0 4px rgba(0, 0, 0, 0.25);
  }
}

</style>