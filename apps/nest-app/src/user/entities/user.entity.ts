import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Store } from '../../store/entities/store.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ comment: '姓名' })
  name: string

  @Column({
    comment: '密码',
    select: false // 忽略密码选择
  })
  password: string

  @Column({
    comment: '密码盐',
    select: false,
    default: ''
  })
  salt: string

  @Column({ comment: '手机号' })
  phone: string

  @Column({ comment: '邮箱' })
  email: string

  @OneToMany(type => Store, store => store.user)
  stores: Store[]
}
