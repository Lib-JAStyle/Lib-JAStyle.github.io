
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
  html += '<h5 class="card-header alert alert-success">' + name + ' (' + total + '/' + capacity + ')</h5>';
  html += '<div class="card-body">';
  html += '<ul class="list-group">';
  things.forEach(t => {
    html += '<li class="list-group-item">';
    html += t["name"] + ' (' + t['capacity'] + ')';
    html += '<p class="text-right"><button>+</button></p>';
    html += '</li>';
  });
  html += '</ul>';
  html += '</div>';
  html += '<div class="card-footer input-group">';
  html += '<input type="text" class="form-control">';
  html += '<div class="input-group-append">';
  html += '<button class="btn btn-outline-secondary" type="button">Add</button>';
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
