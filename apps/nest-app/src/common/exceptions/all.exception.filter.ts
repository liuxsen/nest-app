import { ArgumentsHost, Catch, ExceptionFilter,ServiceUnavailableException, HttpStatus } from '@nestjs/common'
import { Request, Response } from 'express'

// 异常请求拦截
@Catch() // 参数为空，捕获所有的错误异常
export class AllExceptionFilter<T> implements ExceptionFilter {
  catch (exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    // request.log.error(exception)

    // 非 HTTP 标准异常的处理。
    response
      .status(HttpStatus.SERVICE_UNAVAILABLE)
      .send({
        statusCode: HttpStatus.SERVICE_UNAVAILABLE,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: new ServiceUnavailableException().getResponse()
      })
  }
}
