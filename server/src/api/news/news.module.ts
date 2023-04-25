import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'

import { NewsService } from './news.service'
import { NewsController } from './news.controller'
import { NewsEntity } from './entities/news.entity'

@Module({
  imports: [
    RouterModule.register([
      {
        path: '', // 这里 如果不写path，那么就是默认的根路径
        module: NewsModule,
      },
    ]),
    TypeOrmModule.forFeature([NewsEntity]),
  ],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
