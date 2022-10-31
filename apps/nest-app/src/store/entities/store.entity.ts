import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "../../member/entities/member.entity";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(type => User, user => user.stores)
  user: User

  @OneToMany(type => Member, Member => Member.store)
  members: Member[]
}
