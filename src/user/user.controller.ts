import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, CACHE_MANAGER } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { ConfigService } from '@nestjs/config'
import { ApiTags } from '@nestjs/swagger'
import { BusinessException } from '../common/exceptions/business.exception.filter';
import { Cache } from 'cache-manager'

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor (
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  @Post()
  create (@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get('sec-cache')
  setCache(){
    return this.cacheManager.set('cache-key', 1, 5000)
  }

  @Get('cache')
  async getCache(){
    const data = await this.cacheManager.get('cache-key')
    console.log(data)
    return data
  }
  @Get()
  findAll () {
    // return this.configService.get('TEST_VALUE').name
    // throw new Error('error msg')
    // throw new BusinessException('error')
    return BusinessException.throwForbidden()
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.userService.findOne(+id)
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.userService.remove(+id)
  }
}
