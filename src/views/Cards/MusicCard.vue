<template>
  <div class="MusicCard">
    <div class="card">
      <div class="cover">
      </div>
      <div class="control">
        <div class="button-play"><svg t="1679729442836" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2770" width="200" height="200">
            <path
              d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m-57.782857 268.190476c-21.942857 0-39.740952 17.798095-39.740953 39.740952v209.13981a39.740952 39.740952 0 0 0 61.196191 33.426285l164.352-105.593904a39.740952 39.740952 0 0 0-0.292571-67.047619l-164.352-103.545905a39.740952 39.740952 0 0 0-21.187048-6.119619z"
              p-id="2771" fill="#515151"></path>
          </svg></div>
        <div class="button-share"><svg t="1679730010240" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="4842" width="200" height="200">
            <path
              d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m0 398.221312c-31.418368 0-56.889344 25.470976-56.889344 56.889344s25.470976 56.889344 56.889344 56.889344 56.889344-25.470976 56.889344-56.889344-25.470976-56.889344-56.889344-56.889344z m-227.555328 0c-31.419392 0-56.889344 25.470976-56.889344 56.889344s25.469952 56.889344 56.889344 56.889344c31.418368 0 56.88832-25.470976 56.88832-56.889344s-25.469952-56.889344-56.88832-56.889344z m455.110656 0c-31.418368 0-56.88832 25.470976-56.88832 56.889344s25.469952 56.889344 56.88832 56.889344c31.419392 0 56.889344-25.470976 56.889344-56.889344s-25.469952-56.889344-56.889344-56.889344z"
              fill="#515151" p-id="4843"></path>
          </svg></div>
      </div>
      <div><span class="text-hover">Hello</span></div>
      <div><span class="text-hover">RADWIMPS</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.MusicCard {

}

.icon {
  height: 40px;
  width: 40px;
  cursor: pointer;
}

.container {
  position: relative;
  left: 100px;
  top: 100px;
}

.card {
  width: 300px;
  height: 300px;
  /* z-index: 2; */
  position: relative;
  display: inline-block;
}

.cover {
  width: 100%;
  height: 100%;
  background-image: url("https://lightmeter30.github.io/img/avatar.jpg");
  background-size: cover;
  z-index: 2;
  border-radius: 10px;
}
.control {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.control:after {
  content: "";
  /* background-color: rgba(51,51,51,.3); */
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  border-radius: 10px;
}

.control:hover:after {
  background-color: rgba(51,51,51,.3);
}

.button-play {
  position: absolute;
  left: 5px;
  bottom: 0;
  z-index: 3;
}

.button-share {
  position: absolute;
  right: 5px;
  bottom: 0;
  z-index: 3;
}

.text-hover {
  cursor: pointer;
}

.text-hover:hover {
  text-decoration: underline;
}
</style>