import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, type: 'text' })
  title: string;

  @Column('longtext')
  description: string;

  @Column('text')
  author: string;
}