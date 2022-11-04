import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginAuthDto } from './dto/login-auth.dto'
import { AuthGuard } from './guards/auth.guard'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor (private readonly authService: AuthService) {}

  @Post('login')
  create (@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto)
  }

  @UseGuards(AuthGuard)
  @Post('profile')
  list (@Request() req: any) {
    return req.user
  }
}
