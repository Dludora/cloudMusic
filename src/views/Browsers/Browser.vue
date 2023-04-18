<template>
    <main>
        <div class="content-container">
            <h1 id="browser">
                浏览
            </h1>
            <div class="recommend-container">
                <scroll-container
                        card-number="3"
                        card-width="32rem"
                        height="22rem"
                        step="3"
                        step-width="32">
                    <recom-card class="recommend-card" v-for="card in recomCards" :title="card.title"
                                :description="card.description"
                                :key="card.link" :link="card.link" :img-url="card.imgUrl" :authors="card.authors"/>
                </scroll-container>
            </div>
            <div class="new-music-container">
                <p @click="router.push({path: 'room', query: {title: 'new-music'}})">new-music
                    <n-icon>
                        <ChevronForwardOutline/>
                    </n-icon>
                </p>
                <scroll-container
                        card-number="5"
                        card-width="19.5rem"
                        height="21rem"
                        step="5"
                        step-width="19.5"
                        class="new-music" ref="newMusic"
                >
                    <music-card v-for="newMusicCard in newMusicCards" :id="newMusicCard.id" :title="newMusicCard.title"
                                :img-url="newMusicCard.imgUrl" :author="newMusicCard.author"/>
                </scroll-container>

            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import {faker} from "@faker-js/faker"
import {RecomCard, MusicCard} from "@/components/Cards"
import ScrollContainer from "@/components/ScrollContainer.vue"
import type {MusicList, Recommend} from '@/types/broswer'
import {ChevronForwardOutline} from '@vicons/ionicons5'
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()
const recomCards: Recommend[] = [
    {
        title: faker.music.genre(),
        imgUrl: faker.image.fashion(),
        link: '1',
        description: faker.lorem.paragraph(),
        authors: [faker.name.fullName(), faker.name.fullName()]
    },
    {
        title: faker.music.genre(),
        imgUrl: faker.image.fashion(),
        link: '1',
        description: faker.lorem.paragraph(),
        authors: [faker.name.fullName(), faker.name.fullName()]
    },
    {
        title: faker.music.genre(),
        imgUrl: faker.image.fashion(),
        link: '1',
        description: faker.lorem.paragraph(),
        authors: [faker.name.fullName(), faker.name.fullName()]
    },
    {
        title: faker.music.genre(),
        imgUrl: faker.image.fashion(),
        link: '1',
        description: faker.lorem.paragraph(),
        authors: [faker.name.fullName(), faker.name.fullName()]
    },
    {
        title: faker.music.genre(),
        imgUrl: faker.image.fashion(),
        link: '1',
        description: faker.lorem.paragraph(),
        authors: [faker.name.fullName(), faker.name.fullName()]
    },
]
const newMusicCards: MusicList[] = [
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
$card-width-1: 32rem;
$card-width-2: 17.5rem;

main {
  min-height: inherit;
  color: $cloud-2-hex;

  .content-container {
    margin: 0 auto;
    width: inherit;
    min-height: 100%;

    #browser {
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

    .recommend-container {
      height: 22rem;
      position: relative;

      //.recommend {
      //  position: relative;
      //  height: 22rem;
      //  @include scroll-column($card-width-1, 3);
      //}


    }

    .new-music-container {
      height: calc(1rem + 21rem);
      position: relative;

      p {
        margin: 0;
        padding-left: 1rem;
        font-size: 1.2rem;
        margin-bottom: -.6rem;
        font-weight: bold;
        color: $cloud-3-hex;
        cursor: pointer;

        display: flex;
        align-items: center;

        .n-icon {
          margin-top: .2rem;
          color: $cloud-2-hex;
        }
      }
    }

  }

}

</style>