import { SharedEntity } from '@src/shared/entities/base.entity'

import { Entity, Column, Index, OneToOne, JoinColumn } from 'typeorm'
import { ColumnEntity } from '@src/api/column/entities/column.entity'
@Entity('banner')
export class BannerEntity extends SharedEntity {
  constructor() {
    super()
  }
  @Index()
  @Column({
    type: 'varchar',
    length: 50,
    name: 'title',
    comment: 'banner标题',
  })
  title!: string

  // 副标题
  @Column({
    type: 'varchar',
    length: 50,
    name: 'subtitle',
    default: '',
    comment: 'banner副标题',
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
    name: 'source',
    default: '',
    comment: '来源',
  })
  source!: string

  @Column({
    type: 'varchar',
    length: 50,
    name: 'cover_url',
    default: '',
    comment: '封面',
  })
  cover_url!: string

  // link
  @Column({
    type: 'varchar',
    length: 50,
    name: 'link_url',
    default: '',
    comment: '封面',
  })
  link_url!: string

  @Column({
    type: 'varchar',
    length: 50,
    name: 'remark',
    default: '',
    comment: '备注',
  })
  remark!: string
}
