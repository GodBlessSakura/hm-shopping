// 存放登录的接口请求
import request from '@/utils/request'

export const getPicCode = () => {
  return request.get('/captcha/image')
}

export const getMessageCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

export const condeLogin = (smsCode, mobile) => {
  return request.post('/passport/login', {
    form: {
      smsCode,
      mobile,
      isParty: false,
      partyData: {}
    }
  })
}
