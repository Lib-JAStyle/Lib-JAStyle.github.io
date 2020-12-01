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

function createThingId(groupId)
{
  var group = getGroup(groupId);
  if (group == null) {
    console.log('グループが存在しません');
    return null;
  }
  var length = group['things'].length;
  if (length == 0) {
    return 1;
  }
  return group['things'][length - 1]['id'] + 1;
}

function updateThing(groupId, thing)
{
  var group = getGroup(groupId);
  var index = group['things'].findIndex(function(t) {
    return t['id'] == thing['id'];
  });

  if (index == -1) {
    group['things'].push(thing);
  } else {
    group['things'][index] = thing;
  }
}

function addThing(groupId, name, count)
{
  var group = getGroup(groupId);
 
  if (group == null) {
    console.log('グループが存在しません');
    return null;
  }
  var thing = {
    'id': createThingId(groupId),
    'name': name,
    'count': count,
    'note': ''
  };
  group['things'].push(thing);
  return thing;
}

function getThing(groupId, id)
{
  var group = getGroup(groupId);
  if (group == null) {
    console.log('グループが存在しません');
    return null;
  }
  return group['things'].find(t => t['id'] == id);
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

function removeGroup(id)
{
  // TODO: グループ数が多くなった時の処理負荷が懸念
  groups = groups.filter(item => item['id'] !== id);
}

function getGroup(id)
{
  return groups.find(g => g['id'] == id);
}

function getUserGroups()
{
  return groups;
}
