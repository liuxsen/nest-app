import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Product } from './product.entity'

@Entity()
export class ProductSku {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ comment: '价格' })
  price: number

  @Column({ comment: '排序' })
  sort: number

  @Column({ comment: '库存' })
  stock: number

  @Column({
    type: 'json',
    comment: '规格信息'
  })
  sku: object

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date

  @ManyToOne(() => Product)
  product: Product
}
