<template>
	<view>
		<goodsList :listData="goodsAll" />
	</view>
</template>

<script>
	import goodsList from '../../../components/goodsList.vue'
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				goodsAll: []
			}
		},
		onLoad() {
			this.getShopList()
		},
		methods: {
			getShopList() {
				this.$http('/goods/search').then(res => {
					this.goodsAll = res.message.goods
				})
			}
		},
		async onPullDownRefresh(){
			await this.getShopList()
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},1000)
		}
	}
</script>

<style>

</style>
