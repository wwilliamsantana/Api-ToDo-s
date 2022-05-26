import { v4 as uuidV4 } from "uuid";

class Todos {
  id?: string;
  author: string;
  description: string;
  created_at: Date;
  update_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Todos };
