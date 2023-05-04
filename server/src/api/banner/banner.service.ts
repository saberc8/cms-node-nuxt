import { Injectable } from '@nestjs/common'
import { CreateBannerDto } from './dto/create-banner.dto'
import { FindBannerDto } from './dto/find-banner.dto'
import { UpdateBannerDto } from './dto/update-banner.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Like } from 'typeorm'
import { BannerEntity } from './entities/banner.entity'
@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(BannerEntity)
    private readonly bannerEntity: Repository<BannerEntity>,
  ) {}

  async add(createBannerDto: CreateBannerDto) {
    return await this.bannerEntity.save(createBannerDto)
  }

  async updateBanner(data: UpdateBannerDto) {
    console.log(data, '--------')
    const { id } = data
    const banner = await this.bannerEntity.findOne({
      where: { id },
    })
    if (!banner) throw new Error('菜单不存在')
    return await this.bannerEntity.update(id, data)
  }

  async getBannerList(findBannerDto: FindBannerDto) {
    const {
      page = 1,
      size = 10,
      title,
    } = findBannerDto
    // where 模糊搜索
    const where = {
      ...(!!title ? { title: Like(`%${title}%`) } : null),
    }
    const result = await this.bannerEntity.findAndCount({
      where,
      order: {
        id: 'ASC',
      },
      skip: (page - 1) * size,
      take: size,
    })
    return Object.assign({ total: result[1] }, { list: result[0] })
  }

  async getAllBannerList() {
    const result = await this.bannerEntity.find()
    return result
  }

  async deleteBanner(findBannerDto: FindBannerDto) {
    const { id } = findBannerDto
    console.log(id)
    const result = await this.bannerEntity.delete(id)
    return result
  }
}
