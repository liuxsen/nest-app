import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'
import { BusinessException } from '../common/exceptions/business.exception.filter'
import { BUSINESS_ERROR_CODE } from '../common/exceptions/business.error.codes'
import { PaginationDto } from '../common/dto/pagination.dto'
import { getPaginationParams } from '../common/utils/getPaginationParams'

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User)
    private readonly userReponstory: Repository<User>
  ) {

  }

  async create (createUserDto: CreateUserDto) {
    const hasUser = await this.userReponstory.findOne({
      where: {
        phone: createUserDto.phone
      }
    })
    if (hasUser) {
      throw new BusinessException({
        code: BUSINESS_ERROR_CODE.USER_ALREADY_EXSITS,
        message: '用户已存在'
      })
    }
    const user = this.userReponstory.create(createUserDto)
    return this.userReponstory.save(user)
  }

  async findAll (paginationDto: PaginationDto) {
    const { take, skip } = getPaginationParams(paginationDto)
    const [users, total] = await this.userReponstory.findAndCount({
      take,
      skip
    })
    return {
      data: users,
      total
    }
  }

  findOne (id: number) {
    return this.userReponstory.findOne({
      where: { id }
    })
  }

  async update (id: number, updateUserDto: UpdateUserDto) {
    await this.userReponstory.update(id, updateUserDto)
    return true
  }

  remove (id: number) {
    return `This action removes a #${id} user`
  }
}
