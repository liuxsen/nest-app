import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
      // 微服务
      ClientsModule.register([
        {
          name: 'MATH_SERVICE',
          transport: Transport.TCP,
          options: {
            port: 4000,
          },
        }
      ]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
