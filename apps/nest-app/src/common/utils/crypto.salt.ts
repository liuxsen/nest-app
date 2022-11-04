// 加密
import * as bcrypt from 'bcryptjs'

const privateKey = 'hash-pwd'

export const hash = (text: string) => {
  const salt = bcrypt.genSaltSync(10)
  const hashPwd = bcrypt.hashSync(privateKey + text, salt)
  return {
    hashPwd, salt
  }
}

export const hashWithSalt = (text: string, salt: string) => {
  const hashPwd = bcrypt.hashSync(privateKey + text, salt)
  return hashPwd
}
