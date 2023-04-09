<template>
  <div class="play-list">
    <div class="introduction">
      <!-- list-cover: 图片
           introduction-info:介绍
           more:更多-->
      <div class="list-cover">
        <n-image width="100" :src="playListInfo.cover" />
      </div>
      <div class="introduction-info">
        <div class="play-list-title">
          {{ playListInfo.title }}
        </div>
        <div class="play-list-author">
          {{ playListInfo.author }}
        </div>
        <div class="play-list-introduction">
          <n-ellipsis :line-clamp="2">
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
      <n-data-table :columns="columns" :data="playListInfo.songList" :pagination="false" :bordered="false" />
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
  introduction: "Ryuichi Sakamoto, affectionately known as \"The Professor,\" is a respected and beloved Japanese music artist. \
  He graduated from the Tokyo University of the Arts. Trained as a student in serious music composition, he has a combination of \
  talent and ability, and he is at ease in many fields such as classical, jazz, electronic, ethnic and popular music. As the Yellow \
  Magic Orchestra (YMO) gained influence overseas, Ryuichi Sakamoto became famous as a member of the orchestra. The score for director \
  Nagisa Oshima's Merry Christmas, Mr. Lawrence was the beginning of Sakamoto's film composing career, and the Oscar-winning score \
  for The Last Emperor made him a world-renowned musician at a young age.In the spirit of artistic exploration, Ryuichi Sakamoto \
  has never shied away from speaking out in the commercial realm, allowing his music to express the purity and simplicity of nature,\
  and allowing his ears and body to evolve with the urban culture. Since he was a student, he has seen the limitations of western \
  music in expression. He prefers folk music and electronic music, but he has not changed his original intention after many wonderful\
  and successful experiences: collecting the weak biological potentials of trees, recording the sounds of the ice sea in the Arctic, \
  and exploring the limits of music creation with a constant attitude of breaking rules. At the beginning of 2023, he released his last \
  album, \"12\", which recorded his years of struggle against cancer. He passed away in March, leaving music fans all over the world with classic \
  works that cross the boundaries of styles and cultures, and countless moving memories.",
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
.play-list {}

.introduction {}

.list-cover {}

.introduction-info {}

.play-list-title {}

.play-list-author {}

.play-list-introduction {}

.play-button {}

.more {}

.song-list {}

.about {}
</style>