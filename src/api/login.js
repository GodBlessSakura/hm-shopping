// 存放登录的接口请求
import request from '@/utils/request'

export const getPicCode = () => {
  return request.get('/captcha/image')
}
