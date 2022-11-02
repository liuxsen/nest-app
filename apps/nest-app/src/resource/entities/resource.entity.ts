import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from '../../role/entities/role.entity'

export enum ResourceType {
  menu,
  btn
}

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    comment: '父级资源'
  })
  parentId: number

  @Column()
  name: string

  @Column({
    type: 'enum',
    enum: ResourceType
  })
  type: ResourceType

  @ManyToOne(() => Role)
  role: Role
}
