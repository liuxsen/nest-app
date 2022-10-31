import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { generateDocument } from './doc'
import { TransformInterceptor } from './common/interceptors/transform.interceptor'
import { AllExceptionFilter } from './common/exceptions/all.exception.filter'
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';

declare const module: any

async function bootstrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  generateDocument(app)

  app.useGlobalFilters(new AllExceptionFilter(), new HttpExceptionFilter())
  app.useGlobalInterceptors(new TransformInterceptor())


  // TODO: don't work
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }

  await app.listen(3000)
}
bootstrap()
