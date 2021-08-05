const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
export const http = (url, method, data) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method: method || 'GET',
			data: data || {},
			success: res => {
				resolve(res.data)
			},
			fail: err => {
				uni.showToast({
					title: "网络请求失败"
				})
				reject(err)
			}
		})
	})
}
