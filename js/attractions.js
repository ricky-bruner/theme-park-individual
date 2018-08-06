"use strict";

let db = require('./db-calls.js');
let beginAttractions = require('./beginAttractionBuild.js');

let areas;
let types;
let attractions;

db.fetchAreas().then((result) => {
    areas = result;
    console.log("areas db was hit");
    db.fetchTypes().then((result) => {
        types = result;
        console.log("types db was hit");
        db.fetchAttractions().then((result) => {
            attractions = result;
            console.log("attractions db was hit");
            console.log("attractions:", attractions);
            console.log("types:", types);
            console.log("areas:", areas);
            beginAttractions(areas, types, attractions);
        });
    });
});

module.exports = attractions, areas, types;