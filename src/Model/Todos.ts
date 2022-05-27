import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
class Todos {
  @PrimaryColumn()
  id?: string;
  @Column()
  author: string;
  @Column()
  description: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  update_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Todos };
