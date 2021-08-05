<template>
	<view style="width:100%;display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;">
		<view class="listitem" v-for="item in listData" :key="item.goods_id" @click="gotoDetail(item)">
			<view class="itemimg">
				<image :src="item.goods_big_logo"></image>
			</view>
			<view class="intro">
				<view class="price">
					<text style="color:red">￥{{item.goods_price}}</text>
					<text
						style="font-size:26rpx;text-decoration: line-through;display: inline-block;margin-left:30rpx;color:#999">￥{{item.goods_price}}</text>
				</view>
				<view class="texttitle" :title="item.goods_name">
					{{item.goods_name}}
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		name: "goodsList",
		props: {
			listData: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {};
		},
		methods: {
			gotoDetail(item) {
				this.$emit('transfer',item)
			}
		}

	}
</script>
<style lang="scss" scoped>
	.listitem {
		width: 44%;
		margin: 0rpx 1% 15rpx 1%;
		background-color: #FFFFFF;
		padding: 15rpx 15rpx;
		border-radius: 10rpx;
		height: 500rpx;
	}

	.border {
		border: 1px solid red;
	}

	.itemimg {
		width: 100%;
		height: 350rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.intro {
		.price {
			font-size: 32rpx;
			margin-top: 10rpx;
		}

		.texttitle {
			color: #333;
			font-size: 26rpx;
			margin-top: 10rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			height: 80rpx;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
</style>
