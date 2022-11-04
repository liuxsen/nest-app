import * as jwt from 'jsonwebtoken'

const secret = 'jwt-secret'

export const sign = (info: any) => {
  return jwt.sign(info, secret, {
    expiresIn: '7d'
  })
}

// var decoded = jwt.verify(token, 'shhhhh');

export const decoded = (token: string) => {
  try {
    return jwt.verify(token, secret, { complete: true }) as jwt.JwtPayload
  } catch (err) {
    return null
  }
}
