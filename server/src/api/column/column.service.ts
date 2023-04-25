import { Injectable } from '@nestjs/common'
import { CreateColumnDto } from './dto/create-column.dto'
import { FindColumnDto } from './dto/find-column.dto'
import { UpdateColumnDto } from './dto/update-column.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Like } from 'typeorm'
import { ColumnEntity } from './entities/column.entity'
@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(ColumnEntity)
    private readonly columnEntity: Repository<ColumnEntity>,
  ) {}

  async add(createColumnDto: CreateColumnDto) {
    return await this.columnEntity.save(createColumnDto)
  }

  async updateColumn(data: UpdateColumnDto) {
    console.log(data, '--------')
    const { id } = data
    const column = await this.columnEntity.findOne({
      where: { id },
    })
    if (!column) throw new Error('菜单不存在')
    return await this.columnEntity.update(id, data)
  }

  async getColumnList(findColumnDto: FindColumnDto) {
    const {
      page = 1,
      size = 10,
      name,
    } = findColumnDto
    // where 模糊搜索
    const where = {
      ...(!!name ? { name: Like(`%${name}%`) } : null),
    }
    const result = await this.columnEntity.findAndCount({
      where,
      order: {
        id: 'ASC',
      },
      skip: (page - 1) * size,
      take: size,
    })
    return Object.assign({ total: result[1] }, { list: result[0] })
  }

  async getAllColumnList() {
    const result = await this.columnEntity.find()
    return result
  }

  async deleteColumn(findColumnDto: FindColumnDto) {
    const { id } = findColumnDto
    console.log(id)
    const result = await this.columnEntity.delete(id)
    return result
  }
}
