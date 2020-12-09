export default {
  name: "DBMixin",
  data: function() {
    return {
      groups: []
    }
  },
  methods: {
    saveDB: function() {
      localStorage['groups'] = JSON.stringify(this.groups);
    },
    loadDB: function() {
      if (localStorage.getItem('groups') === null) {
        console.log('ローカルデータが存在しません');
        return;
      }
      this.groups = JSON.parse(localStorage['groups']);
    },
    clearDB: function() {
      localStorage.clear();
    },
    createThingId: function(groupId) {
      var group = this.getGroup(groupId);
      if (group == null) {
        console.log('グループが存在しません');
        return null;
      }
      var length = group['things'].length;
      if (length == 0) {
        return 1;
      }
      return group['things'][length - 1]['id'] + 1;
    },
    updateThing: function(groupId, thing) {
      var group = this.getGroup(groupId);
      console.log(group);
      var index = group['things'].findIndex(function(t) {
        return t['id'] == thing['id'];
      });

      if (index == -1) {
        group['things'].push(thing);
      } else {
        group['things'][index] = thing;
      }
    },
    addThing: function(groupId, name, count) {
      var group = this.getGroup(groupId);
    
      if (group == null) {
        console.log('グループが存在しません');
        return null;
      }
      var thing = {
        'id': this.createThingId(groupId),
        'name': name,
        'count': count,
        'note': ''
      };
      group['things'].push(thing);
      return thing;
    },
    getThing: function(groupId, id) {
      var group = this.getGroup(groupId);
      if (group == null) {
        console.log('グループが存在しません');
        return null;
      }
      return group['things'].find(t => t['id'] == id);
    },
    createGroupId: function() {
      if (this.groups.length > 0) {
        return this.groups[this.groups.length - 1]['id'] + 1;
      }
      return 1;
    },
    addGroup: function(name, capacity) {
      var group = {
        'id': this.createGroupId(),
        'name': name,
        'capacity': capacity,
        'things': []
      };
      this.groups.push(group);
      return group;
    },
    removeGroup: function(id) {
      // TODO: グループ数が多くなった時の処理負荷が懸念
      this.groups = this.groups.filter(item => item['id'] !== id);
    },
    getGroup: function(id) {
      return this.groups.find(g => g['id'] == id);
    },
    getUserGroups: function() {
      return this.groups;
    }
  }
}
