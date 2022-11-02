import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Store } from '../../store/entities/store.entity'

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => Store)
  store: Store
}
