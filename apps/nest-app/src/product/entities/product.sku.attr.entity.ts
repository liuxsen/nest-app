import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Product } from './product.entity'

// 商品sku属性表
@Entity()
export class ProductSkuAttr {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  attribute: string

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date

  @ManyToOne(() => Product)
  product: Product
}
