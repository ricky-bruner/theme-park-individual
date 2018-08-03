"use strict";

let db = require("./db-calls.js");
let buildParkInfo = require("./park-info-build.js");

let parkInfo = {};


db.fetchParkInfo()
   .then((result) => {
   parkInfo = result;
   buildParkInfo(parkInfo);
});

module.exports = parkInfo;
