
function createCard(group)
{
  var total = 0;
  var name = group["name"];
  var capacity = group["capacity"];
  var things = group["things"];
  things.forEach(t => {
    total += t['capacity'];
  });

  var html = '<div class="card mt-3 ml-3" style="width: 20rem;">';
  html += '<div class="card-header alert alert-success">';

  // グループ操作メニューの構築
  html += '<nav class="navbar navbar-light">';
  html += '<h5 data-toggle="collapse" data-target="#group-body-' + group['id'] + '">' + name + ' (' + total + '/' + capacity + ')</h5>';
  html += '<button class="dropdown-toggle" type="button" data-toggle="dropdown" data-target="group-header-' + group['id'] + '">';
  html += '<span class="navbar-toggler-icon"></span>';
  html += '</button>';
  html += '<div class="dropdown-menu" id="group-header-' + group['id'] + '">';
  html += '<a class="dropdown-item" href="#">Edit</a>';
  html += '<a class="dropdown-item" href="#" onClick="removeGroupFromUI(this, ' + group['id'] + ')">Delete</a>';
  html += '</div>';
  html += '</nav>';

  html += '</div>';
  html += '<div id="group-body-' + group['id'] + '" class="collapse card-body">';
  html += '<ul class="list-group">';
  things.forEach(t => {
    html += '<li class="list-group-item">';
    html += t["name"] + ' (' + t['capacity'] + ')';
    html += '</li>';
  });
  html += '</ul>';
  html += '</div>';
  html += '<div class="card-footer input-group">';
  html += '<input type="text" class="form-control">';
  html += '<div class="input-group-append">';
  html += '<button class="btn btn-outline-secondary" type="button" onClick="addThingFromUI(this, ' + group['id'] + ')">Add</button>';
  html += '</div>';
  html += '</div>';
  return html;
}

function createAddCard()
{
  var html = '<div class="card mt-3 ml-3" style="width: 20rem; height: 10rem;">';
  html += '<div class="card-header">';
  html += '<button class="btn btn-outline-secondary" type="button" onClick="showAddGroupInput(this)">+</button>';
  html += '<span class="ml-2">Add Group</span>';
  html += '</div>';
  html += '</div>';

  return html;
}

function updateGroupList(groups)
{
  var groupListContent = document.getElementById("group-list");
  groupListContent.innerHTML = "";
  groups.forEach(g => {
    groupListContent.innerHTML += createCard(g);
  });
  groupListContent.innerHTML += createAddCard();

  updateHeader(groups);
}

function updateHeader(groups)
{
  var totalThings = 0;
  groups.forEach(g => {
    totalThings += g["things"].length;
  });
  document.getElementById("total_thing").innerHTML = "Thing : " + totalThings;
  document.getElementById("total_group").innerHTML = "Group : " + groups.length;
}
