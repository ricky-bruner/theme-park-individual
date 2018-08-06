"use strict";

let makeAttractionCards = require("./buildAttractionCards.js");

function makeAttractionTypeButtons(areas, types, attractions, area, areaType){
    let mainAttractionDiv = document.querySelector(".attraction-container");
    mainAttractionDiv.innerHTML =
    `<div class="attraction-filter">
        <button id="area-return">Choose Another Area</button>
        <h2 class="${area.replace(/\s/g,'').replace(/\./g,'')}-header">${area}</h2>
        <h4>Choose an Attraction Type!</h4>
    </div>
    <div class="attraction-type-filter"></div>
    <div class="attraction-content"></div>`;
    let typeFilter = document.querySelector(".attraction-type-filter");
    types.forEach(type => {
        typeFilter.innerHTML += 
        `<button id="type--${type.id}">${type.name}</button>`;
    });
    mainAttractionDiv.addEventListener("click", (e) => {
        if (e.target.id.split("--")[0] === "type"){
            let attractionType = event.target.id.split("--")[1];
            makeAttractionCards(attractions, areaType, attractionType);
        }
    });
}

module.exports = makeAttractionTypeButtons;