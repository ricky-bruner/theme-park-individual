"use strict";

function buildParkCard(name, location, hoursopening, hoursclosing, description){
    let parkInfoCard = 
    `<div class="parkInfoCard">
        <div class="city-title">
            <div class="sexy-line1"></div><h3>${location}</h3><div class="sexy-line2"></div>
        </div>
        <h4>Hours of Operation: ${hoursopening} - ${hoursclosing}</h4>
        <p>${description}</p>
        <h2>View our World Famous Park Areas Below</h2>
    </div>`;
    return parkInfoCard;
}

module.exports = buildParkCard;