import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: 'http://152.136.185.210:7878/api/m5',
		timeout:5000
	})
	// //请求拦截
	// instance.interceptors.resquest.use(config => {
	// 	return config
	// }, err => {
	// 	console.log(err);
	// })
	// //相应拦截
	// instance.interceptors.response.use(res => {
	// 	return res.data
	// }, err => {
	// 	console.log(err);
	// })
	
	//发送网络请求
	return instance(config)
}
