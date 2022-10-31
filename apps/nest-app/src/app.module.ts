import { CacheModule, Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
// import { AppController } from './app.controller'
import { ConfigModule } from '@nestjs/config'
import { getConfig } from './common/utils/getconfig'
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreModule } from './store/store.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        load: [getConfig],
        ignoreEnvFile: true // environment files (.env) will be ignored.
      }
    ),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33061,
      username: 'root',
      password: '123456',
      database: 'db',
      // entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CacheModule.register({
      isGlobal: true
    }),
    UserModule,
    StoreModule,
    MemberModule
  ],
  controllers: []
})
export class AppModule {}
