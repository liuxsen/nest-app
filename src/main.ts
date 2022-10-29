import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { generateDocument } from './doc'

declare const module: any

async function bootstrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  generateDocument(app)

  // TODO: don't work
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }

  await app.listen(3000)
}
bootstrap()
