import { PaginationDto } from '../dto/pagination.dto'

// 获取分页参数
export const getPaginationParams = ({ pn, limit }: PaginationDto) => {
  const take: number = limit
  const skip: number = (pn - 1) * limit
  return {
    take,
    skip
  }
}
