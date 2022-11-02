import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Staff } from '../../staff/entities/staff.entity'

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => Staff)
  staff: Staff
}
