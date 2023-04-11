<template>
  <div class="playList">
    <div class="introduction">
      <!-- list-cover: 图片
           introductionInfo:介绍
           more:更多-->
      <div class="listCover">
        <n-image width="280" :src="playListInfo.cover" />
      </div>
      <div class="introductionInfo">
        <div class="play-list-title">
          {{ playListInfo.title }}
        </div>
        <div class="play-list-author">
          <span class="author" >{{ playListInfo.author }}</span>
        </div>
        <div class="play-list-type">
          <span>{{ playListInfo.type }}&nbsp;<b>·</b>&nbsp;{{ playListInfo.time }}</span>
        </div>
        <div class="play-list-introduction">
          <n-ellipsis :line-clamp="3">
            {{ playListInfo.introduction }}
          </n-ellipsis>
        </div>
        <div class="play-button">
          <n-button type="primary">
            播放
          </n-button>
        </div>
      </div>
      <div class="more">
        <n-dropdown trigger="hover" :options="options" @select="handleSelect">
          <div><svg t="1679730010240" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="4842" width="200" height="200">
              <path
                d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m0 398.221312c-31.418368 0-56.889344 25.470976-56.889344 56.889344s25.470976 56.889344 56.889344 56.889344 56.889344-25.470976 56.889344-56.889344-25.470976-56.889344-56.889344-56.889344z m-227.555328 0c-31.419392 0-56.889344 25.470976-56.889344 56.889344s25.469952 56.889344 56.889344 56.889344c31.418368 0 56.88832-25.470976 56.88832-56.889344s-25.469952-56.889344-56.88832-56.889344z m455.110656 0c-31.418368 0-56.88832 25.470976-56.88832 56.889344s25.469952 56.889344 56.88832 56.889344c31.419392 0 56.889344-25.470976 56.889344-56.889344s-25.469952-56.889344-56.889344-56.889344z"
                fill="#515151" p-id="4843"></path>
            </svg>
          </div>
        </n-dropdown>
      </div>
    </div>
    <div class="song-list">
    </div>
    <div class="about"></div>
  </div>
</template>
<script setup lang="ts">
import { h } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
type Song = {
  name: string
  author: string
  album: string
  time: string
}
const message = useMessage();
const options = [
  {
    label: '分享',
    key: "share"
  }
];
const createColumns = ({
  play
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: '歌曲',
      key: 'name',
    },
    {
      title: '艺人',
      key: 'author',
    },
    {
      title: '专辑',
      key: 'album',
    },
    {
      title: '时间',
      key: 'time',
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    },

  ]
}

const columns = createColumns({
  play(row: Song) {
    message.info(`play ${row.name}`);
  }
});

const playListInfo = {
  title: "坂本龙一的代表作",
  author: "takune",
  type: "日语流行",
  time: "2023",
  introduction: "Ryuichi Sakamoto, affectionately known as \"The Professor,\" is a respected and beloved Japanese music artist. He graduated from the Tokyo University of the Arts. ",
  cover: "https://lightmeter30.github.io/img/avatar.jpg",
  songList: [
    {
      name: "カナタハルカ",
      author: "RADWIMPS",
      album: "すずめの戸締まり",
      time: "1:08"
    },
    { name: "残酷な天使のテーゼ", author: "高橋洋子 (たかはし ようこ)", album: "〜refrain〜", time: "4:03" },
    { name: "残酷な天使のテーゼ", author: "高橋洋子 (たかはし ようこ)", album: "〜refrain〜", time: "5:03" },
    { name: "残酷な天使のテーゼ", author: "高橋洋子 (たかはし ようこ)", album: "〜refrain〜", time: "3:03" },
    { name: "残酷な天使のテーゼ", author: "高橋洋子 (たかはし ようこ)", album: "〜refrain〜", time: "12:03" },
  ],

};

function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>
<style scoped lang="scss">
.playList {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
}

.introduction {
  position: relative;
  height: auto;
  // width: 80%;
}

.listCover {
  display: inline-block;
  height: 300px;
  margin-right: 25px;
}

.introductionInfo {
  display: inline-block;
  max-width: 25%;
  position: relative;
  bottom: 50px;
}

.play-list-title {
  font-size: 25px;
}

.play-list-author {
  font-size: 18px;
}

.play-list-type {
  margin-bottom: 15px;
}

.play-list-type span {
  font-size: 15px;
}

.author {
  cursor: pointer;
}

.author:hover {
  text-decoration: underline;
}


.play-list-introduction {
  line-height: 15px;
  font-size: 13px;
}

.play-button {}

.more {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.song-list {
  height: auto;
  max-width: 800px;
}

.about {}

.icon {
  height: 35px;
  width: 35px;
  cursor: pointer;
}

.icon:hover {
  opacity: 0.8;
}
</style>