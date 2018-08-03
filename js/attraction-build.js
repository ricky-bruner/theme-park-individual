"use-strict";

let buildAttractions = require('./attraction-cards.js');
let db = require('./db-calls.js');



function beginAttractions(areas, types, attractions){
    let mainAttractionDiv = document.querySelector(".attraction-container");
    mainAttractionDiv.innerHTML = `<div class="area-filter"></div>`;
    let areaFilter = document.querySelector(".area-filter");
    areas.forEach(area => {
        areaFilter.innerHTML += 
        `<button id="area--${area.id}">${area.name}</button>`;
    });
    mainAttractionDiv.addEventListener("click", (e) => {
        if(e.target.id.split("--")[0] === "area"){
            let areaType = e.target.id.split("--")[1];
            const areaName = e.target.textContent;
            makeAttractionTypeButtons(areas, types, attractions, areaName, areaType);
        }
    });
}

/* 
    Arguments: area (string) - Name of attraction
*/
function makeAttractionTypeButtons(areas, types, attractions, area, areaType){
    let mainAttractionDiv = document.querySelector(".attraction-container");
    mainAttractionDiv.innerHTML =
    `<div class="attraction-filter">
        <button id="area-return">Choose Another Area</button>
        <h2>${area}</h2>
        <h4>Choose an Attraction Type!</h4>
    </div>
    <div class="attraction-type-filter"></div>
    <div class="attraction-content"></div>`;
    let typeFilter = document.querySelector(".attraction-type-filter");
    // Query all types, dynamically build buttons
    types.forEach(type => {
        // Build a button
        typeFilter.innerHTML += 
        `<button id="type--${type.id}">${type.name}</button>`;
    });
    mainAttractionDiv.addEventListener("click", (e) => {
        if (e.target.id.split("--")[0] === "type"){
            let attractionType = event.target.id.split("--")[1];
            makeAttractionCards(attractions, areaType, attractionType);
        }
        if (e.target.id === "area-return"){
            console.log("areas:", areas);
            beginAttractions(areas, types, attractions);
        }
    });
}

function makeAttractionCards(attractions, areaType, attractionType){
    let attractionDiv = document.querySelector(".attraction-content");
    attractionDiv.innerHTML = "";
    console.log(attractionType, areaType);
    console.log(typeof attractionType, typeof areaType);
    attractions.forEach((item) => {
        if(item.type_id == attractionType && item.area_id == areaType){
            attractionDiv.innerHTML += 
            buildAttractions(item.name, item.description);
        }
    });
}

module.exports = {beginAttractions, makeAttractionTypeButtons, makeAttractionCards};