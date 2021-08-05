<template>
	<view>
		<view class="bgimg">
			<image style="height:320rpx;width:750rpx" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode="">
			</image>
		</view>
		<view class="phone-call">
			<text>联系电话：<text style="color:#B50E03" @click="callme">145 5553 3333 (点击拨打)</text></text>
		</view>
		<view class="address">
			地址：撒娇发射机噶卡接口给爱科技爱看啊啊啊啊萨菲拉撒
		</view>
		<view class="map-call">
			<map :scale="scale" :markers="cover" :latitude="latitude" :longitude="longitude"
				style="width:750rpx;height:690rpx"></map>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				longitude: 118.801125,
				latitude: 32.047273,
				cover: [{
					id: 1,
					longitude: 118.801125,
					latitude: 32.047273,
					title: "找我干嘛"
				}],
				scale: 12
			}
		},
		methods: {
			callme() {
				uni.makePhoneCall({
					phoneNumber: '114'//仅为示例
				});
			}
		}
	}
</script>

<style scoped>
	.phone-call {
		border-bottom: 2rpx solid #f5f5f5;
		margin: 20rpx 15rpx;
		padding-bottom: 20rpx;
		font-size: 32rpx;
	}

	.address {
		margin: 20rpx 15rpx;
		padding-bottom: 20rpx;
		font-size: 32rpx;
	}

	.map-call {
		map {
			height: 600rpx;
			width: 100%;
		}
	}
</style>
