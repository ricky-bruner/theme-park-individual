"use-strict";

let makeAttractionTypeButtons = require("./attraction-filter.js");
// let buildAttractions = require('./attraction-cards.js');
// let db = require('./db-calls.js');

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

// function makeAttractionTypeButtons(areas, types, attractions, area, areaType){
//     let mainAttractionDiv = document.querySelector(".attraction-container");
//     mainAttractionDiv.innerHTML =
//     `<div class="attraction-filter">
//         <button id="area-return">Choose Another Area</button>
//         <h2>${area}</h2>
//         <h4>Choose an Attraction Type!</h4>
//     </div>
//     <div class="attraction-type-filter"></div>
//     <div class="attraction-content"></div>`;
//     let typeFilter = document.querySelector(".attraction-type-filter");
//     // Query all types, dynamically build buttons
//     types.forEach(type => {
//         // Build a button
//         typeFilter.innerHTML += 
//         `<button id="type--${type.id}">${type.name}</button>`;
//     });
//     mainAttractionDiv.addEventListener("click", (e) => {
//         if (e.target.id.split("--")[0] === "type"){
//             let attractionType = event.target.id.split("--")[1];
//             makeAttractionCards(attractions, areaType, attractionType);
//         }
//         if (e.target.id === "area-return"){
//             beginAttractions(areas, types, attractions);
//         }
//     });
// }

// function makeAttractionCards(attractions, areaType, attractionType){
//     let attractionDiv = document.querySelector(".attraction-content");
//     attractionDiv.innerHTML = "";
//     console.log(attractionType, areaType);
//     console.log(typeof attractionType, typeof areaType);
//     let intAttractionType = parseInt(attractionType);
//     let intAreaType = parseInt(areaType);
//     console.log(intAttractionType, intAreaType);
//     console.log(typeof intAttractionType, typeof intAreaType);
//     let sortedArray = [];
//     attractions.forEach((item) => {
//         if(item.type_id === intAttractionType && item.area_id === intAreaType){
//                 console.log(sortedArray, sortedArray.length);
//                 sortedArray.push(item);
//                 attractionDiv.innerHTML += 
//                 buildAttractions(item.name, item.description);
//         }
//     });
//     if(sortedArray.length === 0){
//         attractionDiv.innerHTML +=
//         `<p>Please look for these attractions in other areas of NSS Amusement Arcade</p>`;
//     };
// }

module.exports = beginAttractions;