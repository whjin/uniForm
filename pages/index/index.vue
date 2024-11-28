<template>
	<view class="content">
		<button @click="reqServer">请求服务器</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			};
		},
		onLoad() {},
		methods: {
			async reqServer() {
				const co1 = uniCloud.importObject("co1")
				let res = await co1.say('hello uniCloud')
				uni.showModal({
					content: JSON.stringify(res),
					showCancel: false
				})
			}
		}
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>