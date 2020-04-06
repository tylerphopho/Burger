var orm = require("../config/orm");

let burger = {
    selectAll :function(cb) {
        orm.selectAll(cb);
    },

    insert: function(burger, cb) {
        orm.insert(burger, cb);
    },

    update: function(condition, cb) {
        orm.update(condition, cb);
    },

    delete: function(id, cb) {
        orm.delete(id, cb);
    }
};

module.exports = burger;