/* eslint-disable prettier/prettier */
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Detail } from './detail.entity';

@Table
export class BoTranh extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @HasMany(() => Detail)
  image: Detail[];
}
