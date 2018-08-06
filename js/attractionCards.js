"use-strict";

function buildAttractions(name, description){
    let attractionCard = 
        `<div class="attraction-card">
            <h3>${name}</h3>
            <p>${description}</p>
        </div>`;
    return attractionCard;
}

module.exports = buildAttractions;