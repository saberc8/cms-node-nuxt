import { SharedEntity } from '@src/shared/entities/base.entity'

import { Entity, Column, Index, OneToOne, JoinColumn } from 'typeorm'
import { ColumnEntity } from '@src/api/column/entities/column.entity'
@Entity('news')
export class NewsEntity extends SharedEntity {
  constructor() {
    super()
  }
  // q: Column 非必填如何写配置
  // a: 
  @Index()
  @Column({
    type: 'varchar',
    length: 50,
    name: 'title',
    comment: '新闻标题',
  })
  title!: string

  // 副标题
  @Column({
    type: 'varchar',
    length: 50,
    name: 'subtitle',
    default: '',
    comment: '副标题',
  })
  subtitle!: string

  // 描述
  @Column({
    type: 'varchar',
    length: 50,
    name: 'description',
    default: '',
    comment: '描述',
  })
  description!: string

  @Column({
    type: 'varchar',
    length: 50,
    name: 'author',
    default: '',
    comment: '作者',
  })
  author!: string

  @Column({
    type: 'varchar',
    length: 50,
    name: 'source',
    default: '',
    comment: '来源',
  })
  source!: string

  @Column({
    type: 'varchar',
    length: 50,
    name: 'cover',
    default: '',
    comment: '封面',
  })
  cover!: string

  @Column({
    type: 'varchar',
    length: 50,
    name: 'time',
    default: '',
    comment: '时间',
  })
  time!: string

  @Column({
    type: 'text',
    name: 'content',
    comment: '内容',
  })
  content!: string

  @Column({
    type: 'varchar',
    length: 50,
    name: 'remark',
    default: '',
    comment: '备注',
  })
  remark!: string

  @OneToOne(() => ColumnEntity)
  @JoinColumn({ name: 'column_id' })
  column!: ColumnEntity
}
