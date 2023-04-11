<template>
    <div class="container" ref="container">
        <slot style="scroll-snap-align: center;">

        </slot>
    </div>
    <div class="go-left" v-if="scrollTime !== 0" @click="scrollLeft">
        <n-icon size="40">
            <ChevronBackOutline/>
        </n-icon>
    </div>
    <div class="go-right" v-if="showRight" @click="scrollRight">
        <n-icon size="40">
            <ChevronForwardOutline/>
        </n-icon>
    </div>
</template>

<script setup lang="ts">
import {ref } from 'vue'
import {ChevronBackOutline, ChevronForwardOutline} from "@vicons/ionicons5";
const props = defineProps<{
    height: number,
    cardWidth: string,
    cardNumber: number,
    step: number,
    stepWidth: number,
}>()
const container = ref(null)
const scrollTime = ref(0)
const showRight = ref(true)
const scrollLeft = () => {
    container.value.scrollLeft -= props.stepWidth * 16 * props.step
    showRight.value = container.value.scrollLeft + container.value.clientWidth >= container.value.scrollWidth
    scrollTime.value--
}
const scrollRight = () => {
    container.value.scrollLeft += props.stepWidth * 16 * props.step
    showRight.value = container.value.scrollLeft + container.value.clientWidth >= container.value.scrollWidth
    scrollTime.value++
}
defineExpose({scrollLeft, scrollRight})
</script>

<style scoped lang="scss">
.container {
  position: relative;
  height: v-bind(height);

  @include scroll-column(v-bind(cardWidth), v-bind(cardNumber));
}

.go-left {
    position: absolute;
    @include center;
    top: 0;
    left: -2.5rem;
    width: 3rem;
    height: 100%;
}

.go-right {
    position: absolute;
    @include center;
    top: 0;
    right: -2.5rem;
    width: 3rem;
    height: 100%;
}

.go-left, .go-right {
    .n-icon {
        display: none;
        animation: show-block .2s ease-in-out;
        color: rgba($cloud-2-hex, 0.8);
    }

    &:hover {
        cursor: pointer;

        & .n-icon {
            display: inline-block;
            animation: show-block .2s ease-in-out;
        }

        @keyframes show-block {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
}
</style>