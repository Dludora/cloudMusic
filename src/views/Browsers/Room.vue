<template>
    <main class="room">
        <h1>{{ route.query.title }}</h1>
        <div class="container">
            <music-card v-for="newMusicCard in newMusicCards" :id="newMusicCard.id" :title="newMusicCard.title"
                        :img-url="newMusicCard.imgUrl" :author="newMusicCard.author"/>
        </div>
    </main>
</template>

<script setup lang="ts">
import {MusicCard} from "@/components/Cards"
import type {newMusic} from "@/types/broswer";
import {faker} from "@faker-js/faker";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const newMusicCards: newMusic[] = [
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },
    {
        id: Number(faker.random.numeric()),
        title: faker.music.songName(),
        author: faker.name.fullName(),
        imgUrl: faker.image.imageUrl()
    },


]
</script>

<style scoped lang="scss">
.room {
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
    grid-auto-columns: 19.5rem;
    //grid-column-gap: calc((100% - 19.5rem * 5) / (5 - 1));
    grid-template-columns: repeat(5, 1fr);

  }
}
</style>