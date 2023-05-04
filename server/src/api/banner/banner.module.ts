import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'

import { BannerService } from './banner.service'
import { BannerController } from './banner.controller'
import { BannerEntity } from './entities/banner.entity'

@Module({
  imports: [
    RouterModule.register([
      {
        path: '', // 这里 如果不写path，那么就是默认的根路径
        module: BannerModule,
      },
    ]),
    TypeOrmModule.forFeature([BannerEntity]),
  ],
  controllers: [BannerController],
  providers: [BannerService],
})
export class BannerModule {}
