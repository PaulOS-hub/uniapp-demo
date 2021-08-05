<template>
	<view class="page">
		<!-- 菜单 -->
		<view class="menu">
			<view class="leftScroll">
				<view :class="isActive==index?'itemLeftTwo':'itemLeft'" :style="" v-for="(item,index) in leftItems"
					:key="index" @click="chooseClick(index)">
					{{item.val}}
				</view>
			</view>
			<view class="rightScroll">
				<view class="bigConScro" v-for="(item,index) in array" :key="index">
					<view class="topTitle">{{item.val}}</view>
					<view class="botCitysList">
						<view class="listItems" v-for="(items,citys) in array[0].city" :key="citys">{{items}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive: 0,
				leftItems: [{
						val: '热门签证'
					},
					{
						val: '亚洲'
					},
					{
						val: '美洲'
					},
					{
						val: '欧洲'
					},
					{
						val: '大洋洲'
					},
					{
						val: '非洲'
					},{
						val: '热门签证'
					},
					{
						val: '亚洲'
					},
					{
						val: '美洲'
					},
					{
						val: '欧洲'
					},
					{
						val: '大洋洲'
					},
					{
						val: '非洲'
					},{
						val: '热门签证'
					},
					{
						val: '亚洲'
					},
					{
						val: '美洲'
					},
					{
						val: '欧洲'
					},
					{
						val: '大洋洲'
					},
					{
						val: '非洲'
					},{
						val: '热门签证'
					},
					{
						val: '亚洲'
					},
					{
						val: '美洲'
					},
					{
						val: '欧洲'
					},
					{
						val: '大洋洲'
					},
					{
						val: '非洲'
					},
					
				],
				site: [{
						val: '热门签证',
						city: ['成都', '成都', '成都', '成都', '成都', '成都']
					},
					{
						val: '亚洲',
						city: ['杭州', '成都', '成都', '成都', '成都', '成都']
					},
					{
						val: '美洲',
						city: ['美洲', '成都', '成都', '成都', '成都', '成都']
					},
					{
						val: '欧洲',
						city: ['欧洲', '成都', '成都', '成都', '成都', '成都']
					},
					{
						val: '大洋洲',
						city: ['大洋洲', '成都', '成都', '成都', '成都', '成都']
					},
					{
						val: '非洲',
						city: ['非洲', '成都', '成都', '成都', '成都', '成都']
					}
				],
				array: []
			}
		},
		created() {
			// 初始化数据默认选中第一个
			this.array.push(this.site[0])
		},
		methods: {
			chooseClick(index) {
				this.array = []
				this.isActive = index;
				this.array.push(this.site[index])
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		overflow: hidden;
		height:calc(100vh - 88rpx);
		.menu {
			overflow: hidden;
			// margin-top: 20rpx;
			padding: 0px;
			display: flex;
			height:100%;
			.leftScroll {
				overflow: auto;
				font-size: 28rpx;
				font-weight: 400;
				background-color: #F3F3F3;
				.itemLeft {
					width: 186rpx;
					height: 80rpx;
					line-height: 80rpx;
					padding-left: 28rpx;
					color: #333333;
				}
				.itemLeftTwo {
					width: 178rpx;
					height: 80rpx;
					line-height: 80rpx;
					padding-left: 28rpx;
					background-color: #E2EDFF;
					color: #2F77F1;
					border-left: 4px solid #2F77F1;
				}
			}

			.rightScroll {
				background-color: #FFFFFF;
				width: 502rpx;
				height: 1076rpx;

				.bigConScro {
					padding: 0 30rpx;
					.topTitle {
						margin-top: 20rpx;
						font-size: 28rpx;
						font-weight: 400;
						color: #333333;
					}

					.botCitysList {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
						margin-top: 44rpx;

						.listItems {
							margin-bottom: 20rpx;
						}
					}
				}
			}
		}
	}
</style>
