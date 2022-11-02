import { IsNumber } from 'class-validator'

export class PaginationDto {
  /** 页码 */
  @IsNumber()
  pn: number

  /** 每页数量 */
  @IsNumber()
  limit: number
}
