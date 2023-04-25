import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ColumnService } from './column.service'
import { ColumnController } from './column.controller'
import { ColumnEntity } from './entities/column.entity'

@Module({
  imports: [
    RouterModule.register([
      {
        path: '', // 这里 如果不写path，那么就是默认的根路径
        module: ColumnModule,
      },
    ]),
    TypeOrmModule.forFeature([ColumnEntity]),
  ],
  controllers: [ColumnController],
  providers: [ColumnService],
})
export class ColumnModule {}
