import { CacheModule, Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { getConfig } from './common/utils/getconfig'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StoreModule } from './store/store.module'
import { MemberModule } from './member/member.module'
import { OrderModule } from './order/order.module'
import { ProductModule } from './product/product.module';
import { StaffModule } from './staff/staff.module';
import { RoleModule } from './role/role.module';
import { ResourceModule } from './resource/resource.module';
import { AuthModule } from './auth/auth.module';

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
      synchronize: true
    }),
    CacheModule.register({
      isGlobal: true
    }),
    UserModule,
    StoreModule,
    MemberModule,
    OrderModule,
    ProductModule,
    StaffModule,
    RoleModule,
    ResourceModule,
    AuthModule
  ],
  controllers: []
})
export class AppModule {}
