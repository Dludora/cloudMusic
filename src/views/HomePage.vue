<template>
    <div class="sidebar">
        <div class="header">
            <n-icon size="30">
                <Cloud/>
            </n-icon>
            <span>MUSIC</span>
        </div>
        <div class="search">
            <n-input placeholder="搜索">
                <template #prefix>
                    <n-icon>
                        <SearchSharp/>
                    </n-icon>
                </template>
            </n-input>
        </div>
        <div class="nav">
            <div>
                <n-icon size="18">
                    <Grid/>
                </n-icon>
                <span>浏览</span>
            </div>
            <div>
                <n-icon size="18">
                    <Person/>
                </n-icon>
                <span>个人空间</span>
            </div>
        </div>
    </div>
    <div class="scrollable-page">
        <div class="player-bar">
            <div class="wrapper">
                <div class="operate">
                    <n-icon size="24">
                        <PlayBack/>
                    </n-icon>
                    <n-icon size="36" v-if="playIng" @click="playIng = !playIng">
                        <CaretForward/>
                    </n-icon>
                    <n-icon size="36" v-else @click="playIng = !playIng">
                        <Pause/>
                    </n-icon>
                    <n-icon size="24">
                        <PlayForward/>
                    </n-icon>
                </div>
                <div class="sequence">
                    <n-icon size="24" v-if="playSeq === 1" @click="playSeq = 2">
                        <RepeatOne/>
                    </n-icon>
                    <n-icon size="24" v-else-if="playSeq === 0" @click="playSeq = 1">
                        <Repeat/>
                    </n-icon>
                    <n-icon size="24" v-else-if="playSeq === 2" @click="playSeq = 0">
                        <Shuffle/>
                    </n-icon>
                </div>
                <div class="player">
                    <div class="music-block">
                        <n-icon size="28">
                            <MusicalNotes/>
                        </n-icon>
                    </div>
                    <div class="music-display">
                        <n-icon size="32">
                            <Cloud/>
                        </n-icon>
                    </div>
                </div>
                <div class="voice">
                    <n-icon size="16">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <transition>
                                <path
                                        d="M232 416a23.88 23.88 0 0 1-14.2-4.68a8.27 8.27 0 0 1-.66-.51L125.76 336H56a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.75l91.37-74.81a8.27 8.27 0 0 1 .66-.51A24 24 0 0 1 256 120v272a24 24 0 0 1-24 24zm-106.18-80zm-.27-159.86z"
                                        fill="currentColor"></path>
                            </transition>
                            <transition>
                                <path v-show="volumeOne"
                                      transform="translate(2, 11.149)"
                                      d="M320 336a16 16 0 0 1-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81c0-19.38-4.66-37.94-14.25-56.73a16 16 0 0 1 28.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 0 1 320 336z"
                                      fill="currentColor"></path>
                            </transition>
                            <transition>
                                <path v-show="volumeTwo"
                                      transform="translate(2, 11.149)"
                                      d="M368 384a16 16 0 0 1-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0 1 27.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 0 1-13.87 8z"
                                      fill="currentColor"></path>
                            </transition>
                            <transition>
                                <path v-show="volumeThree"
                                      transform="translate(2, 11.149)"
                                      d="M416 432a16 16 0 0 1-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1 1 27-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 0 1 416 432z"
                                      fill="currentColor"></path>
                            </transition>
                        </svg>
                    </n-icon>
                    <n-slider :step="1" v-model:value="volume" :max="100" :min="0"/>
                </div>
                <div class="recorder">
                    <n-icon :size="18" @click="showList = true">
                        <List/>
                    </n-icon>
                </div>
                <div class="profile">
                    <n-dropdown trigger="click" :options="options">
                        <n-icon size="36">
                            <PersonCircle/>
                        </n-icon>
                    </n-dropdown>
                </div>
            </div>
        </div>
        <n-scrollbar>
            <router-view class="content"/>
        </n-scrollbar>
    </div>
    <n-drawer v-model:show="showList" :width="250">
        <n-drawer-content title="待播清单">

        </n-drawer-content>
    </n-drawer>
</template>

<script setup lang="ts">
import {Cloud, SearchSharp, Grid, Person, MusicalNotes, PersonCircle} from '@vicons/ionicons5'
import {CaretForward, Pause, PlayForward, PlayBack} from '@vicons/ionicons5'
import {ReorderThree, Repeat, List, Shuffle} from '@vicons/ionicons5'
import RepeatOne from "@/components/icons/RepeatOne.vue"
import Recorder from "@/components/icons/IconRecorder.vue"
import type {Ref} from "vue"
import {computed, ref} from "vue"

const playIng: Ref<boolean> = ref(false)

// 调节播放顺序, 0是顺序，1是单循环，2是乱序
const playSeq: Ref<number> = ref(0)


// 调节音量
const volume: Ref<number> = ref(50)
const volumeNone = computed(() => {
    return volume.value === 0
})
const volumeOne = computed(() => {
    return volume.value > 0
})
const volumeTwo = computed(() => {
    return volume.value >= 34
})
const volumeThree = computed(() => {
    return volume.value >= 67
})

const options = [
    {
        label: '滨海湾金沙，新加坡',
        key: 'marina bay sands',
    },
    {
        label: '滨海湾金沙，新加坡',
        key: 'm2',
    }
]

const showList: Ref<boolean> = ref(false)

</script>
<style scoped lang="scss">
.sidebar {
  height: 100%;
  float: left;
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  background-color: $cloud-0-hex;
  //border-right: 1px solid $Elements-Icy-Cocoon-2-hex;
  box-shadow: 1px 0 1px rgba(0, 0, 0, 0.25);
  z-index: 900;

  padding: 20px 20px;

  .header {
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    font-weight: 800;
    user-select: none;
    color: $cloud-2-hex;

    display: flex;
    place-items: center;
    align-items: center;
  }

  .search {
    box-sizing: content-box;
    margin-top: 20px;
  }

  .nav {
    margin-top: 30px;

    div {
      padding: 5px;
      line-height: 30px;
      height: 40px;
      cursor: pointer;
      display: flex;
      place-items: center;
      color: $cloud-2-hex;

      .n-icon {
        color: $cloud-3-hex;
        margin: 0 5px;
      }

      font-size: 16px;
      font-weight: 600;
      border-radius: 10px;
      width: 100%;
    }

    div:hover {
      background-color: rgba(89, 107, 117, 0.3);
    }
  }
}

.scrollable-page {
  //padding-top: 54px;
  scroll-padding-top: 54px;
  position: relative;
  margin-left: 260px;
  width: calc(100% - 260px);
  background-color: $cloud-0-hex;

  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  .player-bar {
    position: fixed;
    top: 0;
    width: calc(100% - 260px);
    margin: 0 auto;
    height: 54px;
    background-color: rgba(217, 217, 217, 0.9);
    box-shadow: 4px 0 4px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 101;

    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      max-width: 1680px;

      .operate {
        height: 30px;
        width: 100px;
        line-height: 30px;
        margin-left: 65px;

        display: flex;
        align-items: center;
        place-content: space-between;

        .n-icon {
          color: $cloud-2-hex;
          cursor: pointer;
        }

        .n-icon:hover {
          color: $cloud-3-hex;
        }
      }

      .sequence {
        margin-left: 20px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        place-content: center;

        .n-icon {
          color: $cloud-2-hex;
          cursor: pointer;
        }

        .n-icon:hover {
          color: $cloud-3-hex;
        }
      }

      .player {
        height: 44px;
        display: flex;
        border-radius: 3px;
        margin-left: 50px;

        .music-block {
          height: 100%;
          width: 40px;
          background-color: rgba(13, 38, 58, 0.5);

          display: flex;
          align-items: center;

          .n-icon {
            margin-left: 5px;
            color: #596B75;
          }
        }

        .music-display {
          min-width: 400px;
          background: rgba(89, 107, 117, 0.3);

          display: flex;
          align-items: center;
          justify-content: center;

          .n-icon {
            color: rgba(89, 107, 117, 0.7);
          }
        }
      }

      .voice {
        margin-left: 30px;
        display: flex;
        align-items: center;

        .n-slider {
          width: 100px;
        }

        .n-icon {
          color: $cloud-3-hex;
          margin-right: 3px;
        }
      }

      .recorder {
        margin-left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        .n-icon {
          color: $cloud-2-hex;
          cursor: pointer;
        }

        .n-icon:hover {
          color: $cloud-3-hex;
        }
      }

      .profile {
        margin-left: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        .n-icon {
          cursor: pointer;
          color: $cloud-2-hex;
        }

        .n-icon:hover {
          color: $cloud-3-hex;
        }
      }
    }
  }

  :deep(.n-scrollbar) {
    max-height: 100%;

    .n-scrollbar-content {
      height: 100%;
      min-height: 100%;


      .content {
        padding: calc(54px + 1rem) 3rem 0;
        margin: 0 auto;
        max-width: 1680px;
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>