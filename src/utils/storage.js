/**
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-10 20:11:46
 * @Description  : 将Vuex中的用户信息保存到localStorage中
*/


// 定义localStorage中的key
const USER_INFO_KEY = 'hm_shopping_userInfo'

export const getUserInfo = () => {
  // 从localStorage中获取用户信息
  const userInfo = localStorage.getItem(USER_INFO_KEY)
  // 如果存在用户信息，将其转换为对象并返回
  if (userInfo) {
    return JSON.parse(userInfo)
  }
  // 如果不存在用户信息，返回空对象
  return { token: '', userId: '' }
}

export const setUserInfo = (userInfo) => {
  // 将用户信息转换为字符串并保存到localStorage中
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo))
}

export const removeUserInfo = () => {
  // 从localStorage中移除用户信息
  localStorage.removeItem(USER_INFO_KEY)
}
