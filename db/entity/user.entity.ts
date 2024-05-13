import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm/browser';

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
}