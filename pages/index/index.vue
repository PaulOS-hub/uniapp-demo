<template>
	<view class="content">
		<swiper class="swiper" :circula="circular" :indicator-dots="indicatorDots" :autoplay="autoplay"
			:interval="interval" :duration="duration">
			<swiper-item v-for="(item) in background" :key="item.goods_id">
				<image class="swiper-item" :src="item.image_src" mode=""></image>
			</swiper-item>
		</swiper>

		<view class="tips">
			<view class="tips-item" @click="gotoList">
				<view class=" iconfont icon-ziyuan">
				</view>
				<view class="tip-title">
					绿毛超市
				</view>
			</view>
			<view @click="connectUs" class="tips-item">
				<view class=" iconfont icon-guanyuwomen">

				</view>
				<view class="tip-title">
					联系我们
				</view>
			</view>
			<view class="tips-item" @click="commuJpg">
				<view class=" iconfont icon-tupian">

				</view>
				<view class="tip-title">
					社区图片
				</view>
			</view>
			<view class="tips-item">
				<view class=" iconfont icon-shipin">

				</view>
				<view class="tip-title">
					学习视频
				</view>
			</view>
		</view>

		<view class="bg" style="width:100%;background-color: #eee;">
			<view class="recomment-title" style="background-color: #fff;">
				推荐商品
			</view>
			<view style="width:100%">
				<goodsList @transfer='transfer' :listData="goods" />
			</view>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goodsList.vue'
	export default {
		components: {
			goodsList
		},
		data() {
			return {
				title: 'Hello',
				background: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular: true,
				goods: [],
				goodsAll: [],
				spliceArr: [],
				currentIndex: 1
			}
		},
		onLoad() {
			this.getSwiperList()
			this.getShopList()
		},
		methods: {
			gotoList() {
				uni.navigateTo({
					url: '../goodsList/index/index'
				})
			},
			connectUs() {
				uni.navigateTo({
					url: '../connectus/connectus'
				})
			},
			commuJpg() {
				uni.navigateTo({
					url: '../commuicationjpg/commuicationjpg'
				})
			},
			getSwiperList() {
				this.$http('/home/swiperdata').then(res => {
					this.background = res.message
				})
			},
			loadMore(e) {
				let end
				end = e * 6
				let arr = JSON.parse(JSON.stringify(this.goodsAll))
				if (end > this.goodsAll.length) return false
				return [...this.spliceArr, ...arr.splice(e, end)]
			},
			getShopList() {
				this.$http('/goods/search').then(res => {
					this.goodsAll = res.message.goods
					this.goods = this.loadMore(this.currentIndex)
				})
			},
			transfer(item) {
				uni.navigateTo({
					url: `../detail/detail?goods_id=${item.goods_id}`
				})
			}
		},
		async onPullDownRefresh() {
			await this.getSwiperList()
			await this.getShopList()
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 1000)
		},
		onReachBottom() {
			this.currentIndex += 1
			this.loadMore(this.currentIndex) ? this.goods = this.loadMore(this.currentIndex) : uni.showToast({
				title: "没有更多了"
			})
		}
	}
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

	.swiper {
		height: 400rpx;
		width: 100%;
	}

	.swiper-item {
		width: 100%
	}

	.tips {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 40rpx 30rpx;
		box-sizing: border-box;

	}

	.iconfont {
		font-size: 38rpx;
		text-align: center;
		border-radius: 50%;
		width: 80rpx;
		color: #fff;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #b50e03;
		margin-left: 10rpx;
	}

	.tip-title {
		margin-top: 20rpx;
		text-align: center;
		font-size: 26rpx;
	}

	.recomment-title {
		letter-spacing: 40rpx;
		heigh: 100rpx;
		color: "#999";
		width: 100%;
		margin: 10rpx 0 15rpx 0;
		padding: 15rpx 0;
		font-size: 32rpx;
		text-align: center;
	}

	.tips-item {
		text-align: center;
	}
</style>
