<template>
    <div class="playCard" @mouseover="showMinus=true" @mouseleave="showMinus=false">
        <div class="image">
            <img :src="imgSrc" alt="ss">
        </div>
        <div class="context">
            <n-ellipsis style="max-width: 9rem; pointer-events: none;">{{ name }}</n-ellipsis>
            <span>{{ author }}</span>
        </div>
        <div class="time">
                    <span class="time" v-if="!showMinus">
            {{ time }}
        </span>
            <n-icon class="time icon" style="z-index: 100;" size="20" v-else>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 448 512">
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                          fill="currentColor"></path>
                </svg>
            </n-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
import {faker} from "@faker-js/faker";
import {ref} from "vue";

type PlayCard = {
    imgSrc: string,
    name: string
    author: string,
    time: string,
}
const showMinus = ref(false)
withDefaults(defineProps<PlayCard>(), {
    imgSrc: faker.image.abstract(),
    name: faker.music.songName(),
    author: faker.name.fullName(),
    time: '3:22'
})
</script>

<style scoped lang="scss">
.playCard {
  width: 100%;
  height: 3.5rem;
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  color: $cloud-3-hex;

  &:hover {
    background-color: rgba($cloud-1-hex, .6);
  }

  display: flex;
  align-items: center;

  .image {
    height: 100%;
    width: 2.9rem;
    overflow: hidden;
    border-radius: 0.2rem;
    object-fit: cover;
    object-position: center;
  }

  .context {
    flex: 3;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .time {
    display: flex;
    flex: 1;
    //justify-content: flex-end;
    justify-content: center;
    align-items: end;
  }

  .icon {
    color: $cloud-2-hex;

    &:hover {
      color: $cloud-3-hex;
    }
  }
}
</style>