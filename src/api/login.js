import request from "@/utils/request";

// 获取图片验证码
export const getCaptcha = () => {
	return request.get("/captcha/image", {
		headers: {
			platform: "h5",
		},
	});
}

// 获取短息验证码
// 需要传递图片的Key，图片验证码，以及手机号码
export const getSmsCode = (mobile, imgCode, imgKey) => {
	return request({
		url: '/captcha/sendSmsCaptcha',
		method: 'post',
		header: {
			platform: 'h5',
		},
		data: {
			form: {
				mobile,
				imgCode,
				imgKey,
			}
		}
	})
}

// 用户登录
// 需要传递短信验证码，手机号码，是否是第三方登录，以及第三方登录数据
export const login = (smsCode, mobile, isParty = false, partyData = {}) => {
	return request({
		url: '/passport/login',
		method: 'post',
		headers: {
			platform: 'h5'
		},
		data: {
			form: {
				smsCode,
				mobile,
				isParty,
				partyData,
			}
		}
	})
}