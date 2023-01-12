import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { BoTranh } from './botranh.entity';

@Table
export class Detail extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  image_url: string;

  @ForeignKey(() => BoTranh)
  @Column
  boTranhId: number;

  @BelongsTo(() => BoTranh)
  botranh: BoTranh;
}
