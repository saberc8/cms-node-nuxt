import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common'
import { ColumnService } from './column.service'
import { CreateColumnDto } from './dto/create-column.dto'
import { FindColumnDto } from './dto/find-column.dto'
import { UpdateColumnDto } from './dto/update-column.dto'
@Controller('column')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Post('add')
  add(@Body() createColumnDto: CreateColumnDto) {
    return this.columnService.add(createColumnDto)
  }

  @Post('update')
  updateColumn(@Body() data: UpdateColumnDto) {
    return this.columnService.updateColumn(data)
  }

  @Get('list')
  getColumnList(@Query() findColumnDto: FindColumnDto) {
    return this.columnService.getColumnList(findColumnDto)
  }

  @Delete('delete')
  deleteColumn(@Body() findColumnDto: FindColumnDto) {
    console.log(findColumnDto, 'findColumnDto')
    return this.columnService.deleteColumn(findColumnDto)
  }
}
