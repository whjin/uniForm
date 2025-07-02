<template>
  <view class="container" :style="getStyle">
    <view class="wrapper">
      <view class="btn-box">
        <button @click="onPreload">预览</button>
        <button @click="onOpen">打开</button>
        <button @click="onClose">关闭</button>
      </view>
      <!-- <video :src="videoUrl1" autoplay width="500" height="400"></video> -->
    </view>
  </view>
</template>

<script setup name="login">
import { ref, computed, onMounted } from 'vue';
import { setStatusBarStyle } from '@/common/utils/util';

const getStyle = computed(() => setStatusBarStyle());

let videoUrl1 = ref('rtsp://:8554/');
let videoUrl = ref('http://vd3.bdstatic.com/mda-rg116d3eu6e60dih/360p/h264/1751417421330333238/mda-rg116d3eu6e60dih.mp4');
let url = 'http://192.168.1.169:9000/combat/1/shopGoodImage/2025/06/13/be4a76a0571443cab24ff98b6bb94529.jpeg';
let url2 = 'http://192.168.1.169:9000/combat/1/shopGoodImage/2025/04/01/d3f61a0cb4cc45afb4e5bcb68cdf9c89.webp';

const onPreload = () => {};
const onOpen = () => {
  plus.oauth.getServices(
    res => {
      console.log('111', res);
    },
    err => {
      console.log('222', err);
    }
  );
};
const onClose = () => {};

const toggleWebview = () => {};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btn-box {
      display: flex;
      margin-bottom: 30upx;
      button {
        width: fit-content;
        height: fit-content;
        padding: 0 60upx;
        margin: 0 32upx;
      }
    }
  }
}
</style>
