import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { Request, Response } from 'express'
import { BusinessException, BusinessError } from './business.exception.filter'

// 异常请求拦截
@Catch(HttpException)
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch (exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()

    // 处理业务异常
    if (exception instanceof BusinessException) {
      const error = exception.getResponse() as BusinessError
      response.status(HttpStatus.OK).send({
        data: null,
        status: error.code,
        message: error.message,
        success: false
      })
      return
    }

    response.status(status).send({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.getResponse()
    })
  }
}
