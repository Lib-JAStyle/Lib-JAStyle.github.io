var db = [
  {'id': 1, 'name': 'ノートパソコン', 'category': '家電', 'size': 10},
  {'id': 2, 'name': 'クリアファイル', 'category': '文具', 'size': 2},
  {'id': 3, 'name': 'はんこ', 'category': '文具', 'size': 2},
  {'id': 4, 'name': 'USBケーブル', 'category': '家電', 'size': 2},
  {'id': 5, 'name': '名刺入れ', 'category': '文具', 'size': 2},
  {'id': 6, 'name': '扇子', 'category': 'その他', 'size': 4},
  {'id': 7, 'name': '折りたたみ傘', 'category': '雨具', 'size': 7},
  {'id': 8, 'name': 'ハサミ', 'category': '文具', 'size': 3},
  {'id': 9, 'name': '爪切り', 'category': '文具', 'size': 2},
  {'id': 10, 'name': 'スティックのり', 'category': '文具', 'size': 2},
  {'id': 11, 'name': 'タブレット', 'category': '家電', 'size': 5},
];

var resembles = [
  {'id': 1, 'source': 1, 'destination': 2}
];

var groups = [];

function saveDB()
{
  localStorage['groups'] = JSON.stringify(groups);
}

function loadDB()
{
  if (localStorage.getItem('groups') === null) {
    console.log('ローカルデータが存在しません');
    return;
  }
  groups = JSON.parse(localStorage['groups']);
}

function clearDB()
{
  localStorage.clear();
}

function addThing(groupId, name, capacity)
{
  var group = getGroup(groupId);
  console.log(group);

  if (group == null) {
    console.log('グループが存在しません');
    return null;
  }
  var thing = {
    'id': 0,
    'name': name,
    'capacity': capacity
  };
  group['things'].push(thing);
  return thing;
}

function getThing(id)
{
}

function getUserThings()
{
  return localStorage['things'];
}

function createGroupId()
{
  if (groups.length > 0) {
    return groups[groups.length - 1]['id'] + 1;
  }
  return 1;
}

function addGroup(name, capacity)
{
  var group = {
    'id': createGroupId(),
    'name': name,
    'capacity': capacity,
    'things': []
  };
  groups.push(group);
  return group;
}

function getGroup(id)
{
  return groups.find(g => g['id'] == id);
}

function getUserGroups()
{
  return groups;
}

function getMasterData(name)
{
  return db.find(d => d['name'] == name);
}
