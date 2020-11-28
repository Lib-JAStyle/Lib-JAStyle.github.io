
function resetLocalStorage()
{
  clearDB();
  alert('データリセットが完了しました');
}

function saveLocalStorage()
{
  saveDB();
  alert('データ保存が完了しました');
}

function loadLocalStorage()
{
  loadDB();
  alert('データ読み込みが完了しました');
}

function addDummyGroup()
{
  var group = addGroup('リュック', 50);
  addGroup('小物入れ', 20);
  addThing(group['id'], 'Macbook Pro', 5);
  addThing(group['id'], '折り畳み傘', 4);
  addThing(group['id'], 'クリアファイル', 1);
}
