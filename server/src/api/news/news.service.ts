import { Injectable } from '@nestjs/common'
import { CreateNewsDto } from './dto/create-news.dto'
import { FindNewsDto } from './dto/find-news.dto'
import { UpdateNewsDto } from './dto/update-news.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Like } from 'typeorm'
import { NewsEntity } from './entities/news.entity'
@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsEntity: Repository<NewsEntity>,
  ) {}

  async add(createNewsDto: CreateNewsDto) {
    return await this.newsEntity.save(createNewsDto)
  }

  async updateNews(data: UpdateNewsDto) {
    console.log(data, '--------')
    const { id } = data
    const news = await this.newsEntity.findOne({
      where: { id },
    })
    if (!news) throw new Error('菜单不存在')
    return await this.newsEntity.update(id, data)
  }

  async getNewsList(findNewsDto: FindNewsDto) {
    const {
      page = 1,
      size = 10,
      title,
    } = findNewsDto
    // where 模糊搜索
    const where = {
      ...(!!title ? { title: Like(`%${title}%`) } : null),
    }
    const result = await this.newsEntity.findAndCount({
      where,
      order: {
        id: 'ASC',
      },
      skip: (page - 1) * size,
      take: size,
    })
    return Object.assign({ total: result[1] }, { list: result[0] })
  }

  async getAllNewsList() {
    const result = await this.newsEntity.find()
    return result
  }

  async deleteNews(findNewsDto: FindNewsDto) {
    const { id } = findNewsDto
    console.log(id)
    const result = await this.newsEntity.delete(id)
    return result
  }
}
