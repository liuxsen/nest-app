import { Injectable } from '@nestjs/common'
import { LoginAuthDto } from './dto/login-auth.dto'
import { UserService } from '../user/user.service'
import { hashWithSalt } from '../common/utils/crypto.salt'
import { ForbiddenException } from '../common/exceptions/forbidden.filter'
import { sign } from './jwt'

@Injectable()
export class AuthService {
  constructor (
    private readonly userService: UserService
  ) {

  }

  async login (loginAuthDto: LoginAuthDto) {
    const user = await this.userService.findWithPhone(loginAuthDto.phone)
    const checkPassword = hashWithSalt(loginAuthDto.password, user.salt)
    if (user.password === checkPassword) {
      const token = sign({
        userId: user.id
      })
      return {
        access_token: token
      }
    }
    throw new ForbiddenException()
  }

  findAll () {
    return `This action returns all auth`
  }

  findOne (id: number) {
    return `This action returns a #${id} auth`
  }

  // update (id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`
  // }

  remove (id: number) {
    return `This action removes a #${id} auth`
  }
}
