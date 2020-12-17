import {Model} from "./Model.js"

export class Group extends Model
{
  constructor()
  {
    super();
    this.name = "";
  }

  serialize()
  {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
