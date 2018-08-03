// "use strict";

// let db = require('./db-calls.js');
// let makeAttractionCards = require('./attraction-build.js');

// let attractions = {};

// db.fetchAttractions()
// .then((result) => {
//     attractions = result;
//     console.log("attractions:", attractions);
//     makeAttractionCards(attractions);
// });

// module.exports = attractions;
"use strict";

let db = require('./db-calls.js');
let buildFunctions = require('./attraction-build.js');

let areas;
let types;
let attractions;


db.fetchAreas().then((result) => {
    areas = result;
    db.fetchTypes().then((result) => {
        types = result;
        db.fetchAttractions().then((result) => {
            attractions = result;
            console.log("attractions:", attractions);
            console.log("types:", types);
            console.log("areas:", areas);
            buildFunctions.beginAttractions(areas, types, attractions);
        });
    });
});


module.exports = attractions, areas, types;