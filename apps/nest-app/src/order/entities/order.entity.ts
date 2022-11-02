import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Member } from '../../member/entities/member.entity'
import { Store } from '../../store/entities/store.entity'

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(type => Member)
  member: Member

  @ManyToOne(type => Store)
  store: Store
}
