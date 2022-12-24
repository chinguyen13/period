import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'workout'})
export class WorkoutEntity{
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  start_date: string;

  @Column()
  message: string;

}