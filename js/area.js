"use strict";

let db = require("./db-calls.js");


let areaTypes = {};

db.fetchAreas()
    .then((result) => {
        areaTypes = result;
        console.log(areaTypes);
        makeAreas(areaTypes);
    });

function makeAreas(parkArea) {
    let areaContainer = document.querySelector(".area-container");
    parkArea.forEach((item) => {
        areaContainer.innerHTML +=
            `<div id="areaType${item.id}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
            </div>`;
    });
}
    
module.exports = areaTypes;