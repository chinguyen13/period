import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user'
})
export class UserEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  company: string

  @Column()
  department: string

  @Column()
  email: string

  @Column({
    type: 'enum',
    enum: ['admin', 'user'],
    default: 'user'
  })
  role: string

  @Column({
    default: true
  })
  isActive: boolean
}