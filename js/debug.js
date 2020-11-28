
function resetLocalStorage()
{
  clearDB();
}

function saveLocalStorage()
{
  saveDB();
}

function loadLocalStorage()
{
  loadDB();
}

function addDummyGroup()
{
  var group = addGroup('リュック', 50);
  addGroup('小物入れ', 20);
  addThing(group['id'], 'Macbook Pro', 5);
  addThing(group['id'], '折り畳み傘', 4);
  addThing(group['id'], 'クリアファイル', 1);
}
