import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "../../store/entities/store.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({comment: '姓名'})
  name: string

  @OneToMany(type => Store, store => store.user)
  stores: Store[]
}
