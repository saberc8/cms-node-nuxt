import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { MenuModule } from './menu/menu.module'
import { RoleModule } from './role/role.module'
import { ColumnModule } from './column/column.module'
import { NewsModule } from './news/news.module'

@Module({
  imports: [UserModule, MenuModule, RoleModule, ColumnModule, NewsModule],
})
export class ApiModule {}
