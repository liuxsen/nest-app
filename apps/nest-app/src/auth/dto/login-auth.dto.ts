import { IsString } from 'class-validator'

export class LoginAuthDto {
  /** 邮箱 */
  @IsString()
  email?: string

  /** 手机 */
  @IsString()
  phone: string

  /** 密码 */
  @IsString()
  password: string
}
