"use strict";

let buildAttractions = require("./attractionCards.js");

function makeAttractionCards(attractions, areaType, attractionType){
    let attractionDiv = document.querySelector(".attraction-content");
    attractionDiv.innerHTML = "";
    console.log(attractionType, areaType);
    console.log(typeof attractionType, typeof areaType);
    let intAttractionType = parseInt(attractionType);
    let intAreaType = parseInt(areaType);
    console.log(intAttractionType, intAreaType);
    console.log(typeof intAttractionType, typeof intAreaType);
    let sortedArray = [];
    attractions.forEach((item) => {
        if(item.type_id === intAttractionType && item.area_id === intAreaType){
                console.log(sortedArray, sortedArray.length);
                sortedArray.push(item);
                attractionDiv.innerHTML += 
                buildAttractions(item.name, item.description);
        }
    });
    if(sortedArray.length === 0){
        attractionDiv.innerHTML +=
        `<p>Please look for these attractions in other areas of NSS Amusement Arcade</p>`;
    };   
}

module.exports = makeAttractionCards;