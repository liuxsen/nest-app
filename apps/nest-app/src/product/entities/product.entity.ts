import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Store } from '../../store/entities/store.entity'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(type => Store, Store => Store.products)
  store: Store
}
