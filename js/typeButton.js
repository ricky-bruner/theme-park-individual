"use strict";

function makeTypeArea(dataArray){
    let typeDiv = document.querySelector(".type-container");
    dataArray.forEach((item) => {
    let typeComponent = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        typeDiv.innerHTML +=`<button id="type${item.id}">${typeComponent}</button>`;
    });
}

module.exports= makeTypeArea;
