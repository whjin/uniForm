<template>
  <div class="container">
    <button type="primary" @click="onServeRequest">请求服务器</button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {

    };
  },
  computed: {},
  created: {},
  beforeDestroy: {},
  methods: {
    async onServeRequest () {
      const co1 = uniCloud.importObject("co1");
      let res = await co1.say('hello uniCloud');
      uni.showModal({
        content: JSON.stringify(res),
        showCancel: false
      });
    },
  },
};
</script>

<style lang="less"></style>
