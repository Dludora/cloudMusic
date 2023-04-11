<template>
    <div class="music-card">
        <div class="image">
            <img :src="imgUrl" alt="">
            <n-icon size="32">
                <Play/>
            </n-icon>
        </div>
        <h1 class="title">{{ title }}</h1>
        <p class="author">{{ author }}</p>
    </div>
</template>

<script setup lang="ts">
import {Play} from "@vicons/ionicons5"

type newMusic = {
    id: number;
    title: string;
    author: string;
    imgUrl: string;
}
const props = defineProps<newMusic>()
</script>

<style scoped lang="scss">
.music-card {
  height: calc(19rem + 2rem);
  width: calc(17.5rem + 2rem);
  padding: 1rem;
  overflow: hidden;
  cursor: pointer;

  &:hover .image::after {
    opacity: .3;
  }


  .image {
    width: 100%;
    height: 15.5rem;
    border-radius: 15px;
    overflow: hidden;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      background: $cloud-3-hex;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      z-index: 99;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .n-icon {
      position: absolute;
      bottom: .5rem;
      left: .5rem;
      color: $cloud-0-hex;
      z-index: 100;
      perspective: 200px;
      background: $cloud-2-hex;
      border-radius: 50%;
      opacity: 0;
      transition: opacity .3s ease-in-out;
      @include center;

      &:hover {
        color: $cloud-3-hex;
        background: $cloud-1-hex;
      }

      svg {
        width: 22px;
        height: 22px;
      }

      //transform: translate(-50%, -50%);
      //z-index: 100;
    }
  }

  h1 {
    margin: 0;
    margin-top: .3rem;
    margin-left: .2rem;
    line-height: .4rem;
    height: .4rem;
    font-size: .5rem;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: .4rem 0 0 .2rem;
    height: .5rem;
    line-height: .5rem;
    font-size: .8rem;

    &:hover {
      text-decoration: underline;
    }
  }
}

.music-card:hover .n-icon {
  opacity: 1;
}
</style>