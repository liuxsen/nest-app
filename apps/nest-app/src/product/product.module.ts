import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './entities/product.entity'
import { ProductSku } from './entities/product.sku.entity'
import { ProductSkuAttr } from './entities/product.sku.attr.entity'
import { ProductSkuValue } from './entities/product.sku.value.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductSku,
      ProductSkuAttr,
      ProductSkuValue
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
