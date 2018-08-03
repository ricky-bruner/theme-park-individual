"use strict";

let buildParkCard = require("./park-info-card.js");

function buildParkInfo(dataArray){
    let parkInfoDiv = document.querySelector(".park-info-container");
    parkInfoDiv.innerHTML = buildParkCard(dataArray[0].name, dataArray[0].location, dataArray[0].operating_hours[0].opening, dataArray[0].operating_hours[0].closing, dataArray[0].description);
}

module.exports = buildParkInfo;