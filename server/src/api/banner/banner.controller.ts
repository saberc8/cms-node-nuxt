import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common'
import { BannerService } from './banner.service'
import { CreateBannerDto } from './dto/create-banner.dto'
import { FindBannerDto } from './dto/find-banner.dto'
import { UpdateBannerDto } from './dto/update-banner.dto'
@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post('add')
  add(@Body() createBannerDto: CreateBannerDto) {
    return this.bannerService.add(createBannerDto)
  }

  @Post('update')
  updateBanner(@Body() data: UpdateBannerDto) {
    return this.bannerService.updateBanner(data)
  }

  @Get('list')
  getBannerList(@Query() findBannerDto: FindBannerDto) {
    return this.bannerService.getBannerList(findBannerDto)
  }

  @Delete('delete')
  deleteBanner(@Body() findBannerDto: FindBannerDto) {
    console.log(findBannerDto, 'findBannerDto')
    return this.bannerService.deleteBanner(findBannerDto)
  }
}
