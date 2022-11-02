import { IsString } from 'class-validator'
export class CreateUserDto {
  /** 姓名 */
  @IsString()
  name?: string

  /** 密码 */
  @IsString()
  password: string

  /** 邮箱 */
  @IsString()
  email?: string

  /** 手机号 */
  @IsString()
  phone: string
}
