const connection = require("./connection");

let orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, res){
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function(burger, cb) {
        connection.query("INSERT INTO burgers (burgers_name) VALUES (?)",
        [burger],
        (err, resp) => {
            if (err) throw err;
            cb(resp)
        }
    );
    },
    updateOne: function(id, cb) {
        connection.query("UPDATE burgers SET devoured 1 WHERE id = ?",
        [id],
        (err, resp) => {
            if (err) throw err;
            cb(resp);
        }
        );
    },
    deleteOne: function(id, cb) {
        connection.query("DELETE FROM burgers WHERE id = ?", [id], (err, resp) => {
            if (err) throw err;
            cb(resp);
        });
    }
};

module.exports = orm;