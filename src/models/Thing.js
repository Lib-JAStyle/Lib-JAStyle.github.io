import {Model} from "./Model.js"

export class Thing extends Model
{
  constructor()
  {
    super();
    this.groupId = null;
    this.name = "";
    this.count = 0;
    this.note = "";
  }

  serialize()
  {
    return {
      id: this.id,
      group_id: this.groupId,
      name: this.name,
      count: this.count,
      note: this.note
    };
  }
}
