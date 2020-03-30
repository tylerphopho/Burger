var orm = require("../config/orm");

let burger = {
    selectAll :function(cb) {
        orm.selectAll(cb);
    },

    addOne: function(burger, cb) {
        orm.addOne(burger, cb);
    },

    updateOne: function(condition, cb) {
        orm.updateOne(condition, cb);
    },

    deleteOne: function(id, cb) {
        orm.deleteOne(id, cb);
    }
};

module.exports = burger;