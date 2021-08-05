<template>
	<view>
		<text space="ensp">
			Woshi message
		</text>
		<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
			<button type="default">跳转到新页面</button>
		</navigator>
		<navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
			<button type="default">在当前页打开</button>
		</navigator>
		<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
			<button type="default">跳转tab页面</button>
		</navigator>
		<view>
			<!--#ifdef APP-PLUS-->
			<button @click="getKey()">点我 </button>
			<!-- #endif -->
			<button @click="uploadImg">上传图片</button>
			<view>
				<uni-calendar :insert="true" :lunar="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'" />
			</view>
			<image v-for="(item,index) in imgArr" :key="item" @click="preview(index)" :src="item" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				imgArr: []
			}
		},
		onLoad() {

		},
		methods: {
			getKey() {
				uni.request({
					url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
					method: 'GET',
					success: res => {
						console.log(res.data)
					},
					error: err => {
						console.log(err)
					}
				})
			},
			uploadImg() {
				uni.chooseImage({
					success: res => {
						this.imgArr = res.tempFilePaths
					}
				})

			},
			preview(e) {
				uni.previewImage({
					current: e,
					urls: this.imgArr,
				})
			}
		},
		// 先在page.json里配置开启
		onPullDownRefresh() {
			setTimeout(() => {
				console.log(uni)
				uni.stopPullDownRefresh()
			}, 1000)
		}
	}
</script>

<style>
</style>
