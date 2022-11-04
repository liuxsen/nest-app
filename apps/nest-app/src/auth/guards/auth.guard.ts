import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Request } from 'express'
import { Observable } from 'rxjs'
import { UserService } from '../../user/user.service'
import { decoded } from '../jwt'

const getCookie = (cookieStr: string, name: string) => {
  // 'h-ui-layout-theme=theme-green; i18n_redirected=GXGH; permisson_activeSystemMenuIndex=0; roles=union; scrm_permission_active_tab_index=0; h-ui-layout-type=common; SESSION=OGYzYjM5MTEtMDNiOS00OTg5LTk0NTctNTYzNWM0NTAxYThm; JSESSIONID=E181F9603056396FEE2FE6AC7E8D85A1'
  const arr = cookieStr.split('; ')
  const obj: Record<string, string> = {}
  arr.forEach(item => {
    const [key, val] = item.split('=')
    obj[key] = val
  })
  return obj[name] || null
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (
    private userService: UserService
  ) {}

  async canActivate (context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request & {user: any}>()
    const cookie = request.headers.cookie
    const token = getCookie(cookie, 'access_token')
    if (!token) {
      return false
    }
    const decodeToken = decoded(token)
    if (decodeToken === null) {
      return false
    }
    const user = await this.userService.findOne(decodeToken.payload.userId)
    request.user = user
    return true
  }
}
