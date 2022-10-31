import { CacheModule, Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
// import { AppController } from './app.controller'
import { ConfigModule } from '@nestjs/config'
import { getConfig } from './common/utils/getconfig'
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        load: [getConfig],
        ignoreEnvFile: true // environment files (.env) will be ignored.
      }
    ),
    CacheModule.register({
      isGlobal: true
    }),
    UserModule
  ],
  controllers: []
})
export class AppModule {}
