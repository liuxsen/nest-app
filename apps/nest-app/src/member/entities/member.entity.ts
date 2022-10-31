import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "../../store/entities/store.entity";

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => Store, Store => Store.members)
  store: Store
}
