const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        })
    },

    insertOne: function (val, cb) {
        orm.insertOne("burgers", val, (res) => {
            cb(res);
        });
    },

    updateOne: function (burg, cb){
        orm.updateOne("burgers", burg, (res) => {
            cb(res);
        })
    }
};

module.exports = burger;