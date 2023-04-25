import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common'
import { NewsService } from './news.service'
import { CreateNewsDto } from './dto/create-news.dto'
import { FindNewsDto } from './dto/find-news.dto'
import { UpdateNewsDto } from './dto/update-news.dto'
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('add')
  add(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.add(createNewsDto)
  }

  @Post('update')
  updateNews(@Body() data: UpdateNewsDto) {
    return this.newsService.updateNews(data)
  }

  @Get('list')
  getNewsList(@Query() findNewsDto: FindNewsDto) {
    return this.newsService.getNewsList(findNewsDto)
  }

  @Delete('delete')
  deleteNews(@Body() findNewsDto: FindNewsDto) {
    console.log(findNewsDto, 'findNewsDto')
    return this.newsService.deleteNews(findNewsDto)
  }
}
