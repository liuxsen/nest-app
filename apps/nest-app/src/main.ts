import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { generateDocument } from './doc'
import { TransformInterceptor } from './common/interceptors/transform.interceptor'
import { AllExceptionFilter } from './common/exceptions/all.exception.filter'
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter'
import { ValidationPipe } from '@nestjs/common'

declare const module: any

async function bootstrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.useGlobalFilters(new AllExceptionFilter(), new HttpExceptionFilter())
  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    transformOptions: {
      enableImplicitConversion: true // 基于ts类型做类型转换
    }
  }))

  generateDocument(app)
  // TODO: don't work
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }

  await app.listen(3000)
}
bootstrap()
