import { Entity, ManyToMany, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @ManyToMany(() => Event, (event) => event.participants)
  member: Event[];
}
