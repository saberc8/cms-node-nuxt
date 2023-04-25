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
}
