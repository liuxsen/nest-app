import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from '../../product/entities/product.entity'
import { Order } from './order.entity'

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => Product)
  product: Product

  @ManyToOne(type => Order)
  order: Order
}
