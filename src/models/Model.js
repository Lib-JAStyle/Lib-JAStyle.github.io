// クライアントアプリのみで今回は作成するため
// データ表現をするためのモデルを用意
//
// Vue で調べる限り、該当するモデルクラスがなかったので
// シンプルなモデルクラスとして利用をする
export class Model
{
  constructor()
  {
    this.id = null;
  }

  _createId()
  {
    var name = this.constructor.name;
    var collections = localStorage.getItem(name);
    if (collections) {
      // サイズを返す
      // 0 オリジンなので、それで末尾の ID として利用可能
      return JSON.parse(collections).length;
    } else {
      // データが一件も存在しないので ID 0 を返す
      return 0;
    }
  }

  save()
  {
    if (!this.id) {
      this.id = this._createId();
    }

    // 継承先で name という値が使われる可能性が十分にあるため
    // this.name をここでは使わないようにしている
    var name = this.constructor.name;
    var collections = [];
    var collectionsText = localStorage.getItem(name);
    if (collectionsText) {
      collections = JSON.parse(collectionsText);
    }

    var value = this.serialize();
    var index = collections.findIndex(m => m.id == this.id);
    if (index >= 0) {
      collections[index] = value;
    } else {
      collections.push(value);
    }
    localStorage.setItem(name, JSON.stringify(collections));
  }

  static findFromId(id)
  {
    // 基本的に全てのモデルに ID が存在する前提
    var collections = localStorage.getItem(this.name);
    if (!collections) {
      return null;
    }
    return JSON.parse(collections).find(m => m.id == id);
  }

  static find(predicate)
  {
    var collections = localStorage.getItem(this.name);
    if (!collections) {
      return null;
    }
    return JSON.parse(collections).find(predicate);
  }

  static delete(id)
  {
    var collections = localStorage.getItem(this.name);
    if (!collections) {
      return;
    }
    collections = JSON.parse(collections);
    collections = collections.filter(item => item['id'] !== id);
    localStorage.setItem(this.name, JSON.stringify(collections));
  }

  static all()
  {
    var collections = localStorage.getItem(this.name);
    return collections == null ? null : JSON.parse(collections);
  }

  static count()
  {
    var collections = localStorage.getItem(this.name);
    if (!collections) {
      return 0;
    }
    return JSON.parse(collections).length;
  }
}
