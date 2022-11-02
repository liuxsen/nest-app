import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Product } from './product.entity'

// 商品sku 属性值表
@Entity()
export class ProductSkuValue {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date

  @ManyToOne(() => Product)
  product: Product
}
