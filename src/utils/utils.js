/**
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-10 19:16:47
 * @Description  : 全局工具函数
*/

// 验证手机号是否合法
import { Toast } from 'vant'
export const verifyPhone = (mobile) => {
  if (!mobile) {
    Toast({
      message: '请输入手机号',
      duration: 1000,
    })
    return false
  }

  // 使用正则表达式验证手机号
  const phoneRegex = /^1[3456789]\d{9}$/
  if (!phoneRegex.test(mobile)) {
    console.log(mobile)
    Toast({
      message: '手机号码不正确',
      duration: 1000,
    })
    return false
  }
  return true
}

// 验证图像验证码是否合法
export const verifyImgCode = (imgCode) => {
  if (!imgCode) {
    Toast({
      message: '请输入图像验证码',
      duration: 1000,
    })
    return false
  }
  // 必须是4位数字或者字母
  const imgCodeRegex = /^[0-9a-zA-Z]{4}$/
  if (!imgCodeRegex.test(imgCode)) {
    Toast({
      message: '图像验证码不合法',
      duration: 1000,
    })
    return false
  }

  return true
}

// 校验短信验证码是否合法 必须为6位数字
export const verifySmsCode = (smsCode) => {
  if (!smsCode) {
    Toast({
      message: '请输入短信验证码',
      duration: 1000,
    })
    return false
  }
  // 必须是6位数字
  const smsCodeRegex = /^[0-9]{6}$/
  if (!smsCodeRegex.test(smsCode)) {
    Toast({
      message: '短信验证码不合法',
      duration: 1000,
    })
    return false
  }

  return true
}