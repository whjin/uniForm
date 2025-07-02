<script setup name="App">
import { useStore } from 'vuex';

const store = useStore();
store.dispatch('initTheme');
</script>

<style>
@import url('@/common/styles/css/uni.css');
</style>
