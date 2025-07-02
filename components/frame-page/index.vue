<template>
  <view class="frame-container" :data-theme="currentTheme" :style="getStyle" @click.stop="onTouch">
    <view class="frame-main">
      <view class="frame-header">
        <view class="title">值班巡检终端</view>
      </view>
      <view class="frame-content">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script setup name="frame-page">
import { ref, computed, onMounted } from 'vue';
import { setStatusBarStyle } from '@/common/utils/util';
import { useStore } from 'vuex';
import { onBackPress } from '@dcloudio/uni-app';

const store = useStore();

const currentTheme = computed(() => store.state.theme.currentTheme);

const emit = defineEmits(['onTouch']);

const getStyle = computed(() => setStatusBarStyle());

onBackPress(() => {
  plus.runtime.restart();
});

const onTouch = () => {
  emit('onTouch');
};
</script>

<style lang="less" scoped>
@import url('@/common/styles/less/index.less');
</style>
