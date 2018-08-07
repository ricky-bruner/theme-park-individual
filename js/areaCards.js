"use strict";

function makeAreas(parkAreas) {
    let areaContainer = document.querySelector(".area-container");
    parkAreas.forEach((item) => {
        areaContainer.innerHTML +=
            `<div id="bg-image-${item.id}" class="bottom-div">
                <div class="areaCard" id="areaType${item.id}" style="background:linear-gradient(transparent, #${item.colorTheme});">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                </div>
            </div>`;
    });
}
    
module.exports = makeAreas;