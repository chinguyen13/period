import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'period'
})
export class PeriodEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  start_date: string
}