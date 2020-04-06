var orm = require("../config/orm");

let burger = {
    selectAll :function(cb) {
        orm.selectAll(cb);
    },

    insert: function(burger, cb) {
        orm.insert(burger, cb);
    },

    update: function(id, cb) {
        orm.update(id, cb);
    },

    delete: function(id, cb) {
        orm.delete(id, cb);
    }
};

module.exports = burger;