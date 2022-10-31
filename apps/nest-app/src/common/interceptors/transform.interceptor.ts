import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

// 转换数据
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept (context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
      .pipe(
        map((data) => ({
          data,
          status: 0,
          message: 'success',
          success: true
        }))
      )
  }
}
