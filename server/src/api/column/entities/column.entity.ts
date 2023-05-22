import { SharedEntity } from '@src/shared/entities/base.entity'

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('column')
export class ColumnEntity extends SharedEntity {
  constructor() {
    super()
  }
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'varchar',
    length: 50,
    name: 'name',
    comment: '栏目名称',
  })
  name!: string

  @Column({
    type: 'varchar',
    length: 50,
    name: 'key',
    comment: 'key',
  })
  key!: string

  @Column({
    type: 'int',
    name: 'pid',
    default: '0',
    comment: '父级菜单id',
  })
  pid!: number

  @Column({
    type: 'varchar',
    length: 50,
    name: 'path',
    comment: '栏目路径',
  })
  path!: string

  @Column({
    type: 'varchar',
    length: 50,
    name: 'img',
    default: '',
    comment: '图片',
  })
  img: string
}
