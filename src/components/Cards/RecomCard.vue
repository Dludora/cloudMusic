<template>
    <div class="RecomCard">

        <h2 id="title">
            {{ title }}
        </h2>
        <n-ellipsis>
            {{ description }}
        </n-ellipsis>
        <div class="author">
            <n-ellipsis>
                <template v-if="authors?.length !== 0" v-for="(author,index) in authors">
                    {{ author }}
                    <template v-if="index !== authors.length-1">,</template>
                </template>
            </n-ellipsis>
        </div>

        <div id="image">
            <img :src="imgUrl" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
type Recommend = {
    title: string;
    description: string;
    authors: string[];
    imgUrl: string;
    link: string;
}
const props = defineProps<Recommend>()
console.log(props.imgUrl)
</script>

<style scoped lang="scss">
.RecomCard {
  width: 32rem;
  height: 22rem;
  padding: 1rem;
  cursor: pointer;

  #title {
    margin-top: 0;
    font-size: 14px;
    margin-bottom: -0.5rem;
    color: $cloud-3-hex;

  }

  :deep(.n-ellipsis) {
    margin-top: -0.2rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 1rem;
    width: 100%;
    pointer-events: none;
    color: rgba($cloud-3-hex, .8);
  }

  .author {
    color: $cloud-2-hex;
    height: .8rem;

    :deep(.n-ellipsis) {
      line-height: .8rem;
      font-size: .6rem;
    }
  }

  &:hover #image::after {
    opacity: .5;
  }

  #image {
    margin-top: 1rem;
    border-radius: 15px;
    width: 100%;
    height: 15.5rem;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

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
  }

}
</style>