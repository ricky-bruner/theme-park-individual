"use-strict";

let buildAttractions = require('./attraction-cards.js');
let db = require('./db-calls.js');

function makeAttractionAreaButtons(){
    let mainAttractionDiv = document.querySelector(".attraction-container");
    mainAttractionDiv.innerHTML = 
    `<div class="area-filter">
        <button id="area1">Main Street U.S.A.</button>
        <button id="area2">Adventureland</button>
        <button id="area3">Frontierland</button>
        <button id="area4">Liberty Square</button>
        <button id="area5">Fantasyland</button>
        <button id="area6">Tomorrowland</button>
        <button id="area7">Cinderella Castle</button>
    </div>`;
}

function makeAttractionTypeButtons(area){
    let mainAttractionDiv = document.querySelector(".attraction-container");
    mainAttractionDiv.innerHTML =
    `<div class="attraction-filter">
        <button id="area-return">Choose Another Area</button>
        <h2>${area}</h2>
        <h4>Choose an Attraction Type!</h4>
    </div>
    <div class="attraction-type-filter">
        <button id="attractionType1">Rides</button>
        <button id="attractionType2">Restaurants</button>
        <button id="attractionType3">Shows</button>
        <button id="attractionType4">Vendors</button>
        <button id="attractionType5">Character Meets</button>
        <button id="attractionType6">Animals</button>
        <button id="attractionType7">Games</button>
        <button id="attractionType8">Special Events</button>
    </div>
    <div class="attraction-content"></div>`;
}

function makeAttractionCards(){
    makeAttractionAreaButtons();
    let mainAttractionDiv = document.querySelector(".attraction-container");
    let areaFilter = document.querySelector(".area-filter"); 
    mainAttractionDiv.addEventListener("click", (e) => {
        console.log("I was clicked");
        let key = e.target.id;
        if (key === "area1"){
            let area = e.target.textContent;
            makeAttractionTypeButtons(area);
            if (e.target.id === "attractionType1"){
                key = "area_id";
                let value = 1;
                db.getFilteredAttractions(key, value)
                .then((result) => {
                    attractions = result;
                    console.log("attractions:", attractions);
                    let areaObjectArray = [];
                    for (const objectLocation in attractions) {
                        areaObjectArray.push(attractions[objectLocation]);
                    }
                    console.log("did it work", areaObjectArray);
                    let typeArray = [];
                    areaObjectArray.forEach(item => {
                        if(item.type_id === 1)
                        typeArray.push(item);
                    });
                    let attractionDiv = document.querySelector(".attraction-content")
                    typeArray.forEach(item => {
                        attractionDiv.innerHTML += 
                        buildAttractions(item.name, item.description);
                    });
                });
            }
        }
    });
}
//         let area = e.target.textContent;
//         makeAttractionTypeButtons(area);
//         let attractionDiv = document.querySelector(".attraction-container");
//         attractionDiv.addEventListener("click", (e) =>{ 
//             let key = e.target.textContent;
//             if(key === "Rides"){
//                     let finallyThere = [];
//                     for (const spot in dataObject) {
//                         console.log("value", dataObject[spot])
//                         finallyThere.push(dataObject[spot]);
//                     }
//                     console.log("did it work", finallyThere);
//                     finallyThere.forEach(item => {
//                         attractionDiv.innerHTML += 
//                         buildAttractions(item.name, item.description);
//                 });
//             }
//         });
//     });
// }


// function makeAttractionCards(dataArray){
//     let mainAttractionDiv = document.querySelector(".attraction-container");
//     mainAttractionDiv.innerHTML = 
//     `<div class="area-filter">
//         <button id="area1">Main Street U.S.A.</button>
//         <button id="area2">Adventureland</button>
//         <button id="area3">Frontierland</button>
//         <button id="area4">Liberty Square</button>
//         <button id="area5">Fantasyland</button>
//         <button id="area6">Tomorrowland</button>
//         <button id="area7">Cinderella Castle</button>
//     </div>`;
    
//     let areaFilter = document.querySelector(".area-filter");
//     areaFilter.addEventListener("click", (e) => {
//         if (e.target.id === "area1"){
//             addTypes("Main Street U.S.A.");
//             let attractionDiv = document.querySelector(".attraction-content");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 1){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType2"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 2){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType3"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 3){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType4"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 4){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType5"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 5){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType6"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 6){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType7"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 7){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//                 if(e.target.id === "attractionType8"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 1 && item.type_id === 8){
//                             attractionDiv.innerHTML = 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area2"){
//             addTypes("Adventureland");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 2 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area3"){
//             addTypes("Frontierland");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 3 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area4"){
//             addTypes("Liberty Square");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 4 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area5"){
//             addTypes("Fantasyland");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 5 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area6"){
//             addTypes("Tomorrowland");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 6 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         } else if (e.target.id === "area7"){
//             addTypes("Cinderella Castle");
//             let attractionFilter = document.querySelector(".attraction-type-filter");
//             attractionFilter.addEventListener("click", (e) => {
//                 if(e.target.id === "attractionType1"){
//                     dataArray.forEach((item) => {
//                         if(item.area_id === 7 && item.type_id === 1){
//                             attractionDiv.innerHTML += 
//                             buildAttractions(item.name, item.description);
//                         }
//                     });
//                 }
//             });
//         }
//     });
// }

module.exports = makeAttractionCards;