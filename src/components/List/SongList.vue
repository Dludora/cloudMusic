<template>
  <div class="SongList">
    <div class="SongHead">
      <div class="title">歌曲</div>
      <div class="author">艺人</div>
      <div class="album">专辑</div>
    </div>
    <div class="SongLine" v-for="(item, index) in musicListInfo" :id="'line' + item.id">
      <div class="title">
        <span class="play" v-if="playId === item.id && isPlay">
          <n-icon size="17" @click="pause(item.id)">
            <Pause />
          </n-icon>
        </span>
        <span class="play" v-else>
          <n-icon size="17" @click="play(item.id)">
            <Play />
          </n-icon>
        </span>
        <span style="padding-left: 5px;">
          <n-ellipsis style="max-width: 300px">
            {{ item.title }}
          </n-ellipsis>
        </span>
      </div>
      <div class="author">
        <span>
          <n-ellipsis style="max-width: 250px">
            {{ item.author }}
          </n-ellipsis>
        </span>
      </div>
      <div class="album">
        <span>
          <n-ellipsis style="max-width: 450px">
            {{ item.album }}
          </n-ellipsis>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Play, Pause } from "@vicons/ionicons5";
import { ref } from "vue";

type musicList = {
  musicListInfo:
  {
    title: string;
    author: string;
    album: string;
    id: number;
  }[]

}


const props = defineProps<musicList>();
let line: HTMLElement | null = null;
let playId = ref(-1);
let isPlay = ref(false);


function changePlayStyle(id: number) {
  if (line != null) {
    line.classList.remove("PlayColor");
  }
  line = document.getElementById('line' + id);
  line?.classList.add("PlayColor");
}

function play(id: number) {
  console.log("playing");
  playId.value = id;
  isPlay.value = true;
  changePlayStyle(id);
}

function pause(id: number) {
  console.log("paused");
  isPlay.value = false;
}

</script>
<style scoped lang="scss">
.SongList {

  .SongHead {
    display: flex;
    padding-left: 10px;

    .title {
      width: 30%;
    }

    .author {
      width: 25%;
    }

    .album {
      width: 45%;
    }
  }
}

.SongLine {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 7px;
  padding-left: 10px;

  &:hover {
    background-color: $cloud-1-hex;
  }

  .title {
    width: 30%;

    .play {
      position: relative;
      top: 3px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .author {
    width: 25%;

    span {
      cursor: pointer;
      
      &:hover {
        text-decoration: underline;
        opacity: 0.8;
      }
    }
  }

  .album {
    width: 45%;

    span {
      cursor: pointer;
      
      &:hover {
        text-decoration: underline;
        opacity: 0.8;
      }
    }
  }
}

.PlayColor {
  background: $cloud-1-hex;
  color: $cloud-3-hex;
}
</style>