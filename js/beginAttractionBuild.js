"use-strict";

let makeAttractionTypeButtons = require("./attractionFilter.js");

function beginAttractions(areas, types, attractions){
    let mainAttractionDiv = document.querySelector(".attraction-container");
    mainAttractionDiv.innerHTML = 
        `<div class="area-filter">
            <h2>Choose an Area to view it's attractions!</h2>        
        </div>`;
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
        if (e.target.id === "area-return"){
            beginAttractions(areas, types, attractions);
        }
    });
}

module.exports = beginAttractions;