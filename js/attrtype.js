"use strict";
let db = require("./db-calls.js");
let makeTypeArea= require("./typeButton.js");
let types = {};



db.fetchTypes()
   .then((result) => {
   types = result;
   console.log("types",types);
   makeTypeArea(types);
});

module.exports = types;

