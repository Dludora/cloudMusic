<template>
  <main>
    <div class="playList">
      <div class="introduction">
        <!-- list-cover: 图片
           introductionInfo:介绍
           more:更多-->
        <div class="listCover">
          <img :src="playListInfo.cover" />
        </div>
        <div class="introductionInfo">
          <div class="play-list-title">
            {{ playListInfo.title }}
          </div>
          <div class="play-list-author">
            <span class="author">{{ playListInfo.author }}</span>
          </div>
          <div class="play-list-type">
            <span>{{ playListInfo.type }}&nbsp;<b>·</b>&nbsp;{{ playListInfo.time }}</span>
          </div>
          <div class="play-list-introduction">
            <n-ellipsis :tooltip="false" :line-clamp="3">
              {{ playListInfo.introduction }}
            </n-ellipsis>
          </div>
          <div class="play-button">
            <n-button @click="playAll()" >
              <template #icon>
                <n-icon>
                  <Play />
                </n-icon>
              </template>
              播放
            </n-button>
          </div>
        </div>
        <div class="more">
          <n-dropdown trigger="hover" :options="options">
            <n-icon size="30">
              <EllipsisHorizontal />
            </n-icon>
          </n-dropdown>
        </div>
      </div>
      <div class="song-list">
        <List :music-list-info="playListInfo.songList" />
      </div>
      <div class="about">
        <h2>推荐歌单</h2>
        待完成
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { EllipsisHorizontal, Play } from "@vicons/ionicons5"
import { NButton } from 'naive-ui'
import List from "@/components/List/SongList.vue";

const options = [
  {
    label: '分享',
    key: "share"
  }
];


const playListInfo = {
  title: "坂本龙一的代表作",
  author: "takune",
  type: "日语流行",
  time: "2023",
  introduction: "Ryuichi Sakamoto, affectionately known as \"The Professor,\" is a respected and beloved Japanese music artist. He graduated from the Tokyo University of the Arts. ",
  cover: "https://lightmeter30.github.io/img/avatar.jpg",
  songList: [
    {
      title: "カナタハルカ",
      author: "RADWIMPS",
      album: "すずめの戸締まり",
      id: 1,
    },
    { title: "残酷な天使のテーゼ", author: "高橋洋子 (たかはし ようこ)", album: "〜refrain〜", id: 2 },
    { title: "残酷な天使のテーゼ", author: "高橋洋子 (たかはし ようこ)", album: "〜refrain〜", id: 3 },
    { title: "残酷な天使のテーゼ", author: "高橋洋子 (たかはし ようこ)", album: "〜refrain〜", id: 4 },
    { title: "残酷な天使のテーゼ", author: "高橋洋子 (たかはし ようこ)", album: "〜refrain〜", id: 5 },
  ],

};

function playAll() {
  console.log("PlayAll");
}

</script>
<style scoped lang="scss">
main {
  min-height: inherit;
  color: $cloud-2-hex;

  .playList {
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;

    .introduction {
      position: relative;
      height: auto;
      // width: 80%;

      .listCover {
        display: inline-block;
        height: 300px;
        width: 300px;
        margin-right: 50px;

        img {
          width: 100%;
          height: 100%;
          object-position: center;
          object-fit: cover;
          border-radius: 15px;
        }
      }

      .introductionInfo {
        display: inline-block;
        max-width: 40%;
        position: relative;
        bottom: 50px;

        .play-list-title {
          font-size: 25px;
        }

        .play-list-author {
          font-size: 18px;
        }

        .play-list-type {
          margin-bottom: 5px;

          span {
            font-size: 15px;
          }
        }



        .author {
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }

        }

        .play-list-introduction {
          line-height: 15px;
          font-size: 13px;
        }

        .play-button {
          position: relative;
          top: 15px;

          .n-button {
            background-color: $cloud-2-hex;

            &:hover {
              color: $cloud-3-hex;
            }
          }
        }
      }

      .more {
        position: absolute;
        right: 10px;
        bottom: 10px;
        cursor: pointer;

        .n-icon {
          color: $cloud-0-hex;
          background-color: $cloud-2-hex;
          border-radius: 50%;



          &:hover {
            color: $cloud-3-hex;
            background-color: $cloud-1-hex;
          }
        }
      }
    }

    .song-list {
      height: auto;
      width: 100%;
      margin-top: 20px;
    }

    .about {}
  }
}
</style>