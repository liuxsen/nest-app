import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
// import { AppController } from './app.controller'
import { ConfigModule } from '@nestjs/config'
import { getConfig } from './common/config/getconfig'

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        load: [getConfig],
        ignoreEnvFile: true // environment files (.env) will be ignored.
      }
    ),
    UserModule
  ],
  controllers: []
})
export class AppModule {}
