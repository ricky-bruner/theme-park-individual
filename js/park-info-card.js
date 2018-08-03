"use strict";

function buildParkCard(name, location, hoursopening, hoursclosing, description){
    let parkInfoCard = 
    `<div class="parkInfoCard">
        <h2>${name}</h2>
        <h3>${location}</h3>
        <h4>Hours of Operation: ${hoursopening} - ${hoursclosing}</h4>
        <p>${description}</p>
    </div>`;
    return parkInfoCard;
}

module.exports = buildParkCard;