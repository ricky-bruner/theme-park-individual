"use strict";



function buildDOM(){
    const body = document.querySelector("body");
    const script = document.querySelector("script");
    const header = document.createElement("header");
    const footer = document.createElement("footer");
    const main = document.createElement("main");
    header.innerHTML = `<h1>NSS Amusement Arcade</h1>`;
    footer.innerHTML = `<p><small>&copy; Team Awesome</small></p><a href="nashvillesoftwareschool.com">Nashville Software School</a>`;
    body.insertBefore(header, script);
    body.insertBefore(main, script);
    body.insertBefore(footer, script);
    const mainContent = document.querySelector("main");
    const parkDiv = document.createElement("div");
    parkDiv.setAttribute("class", "park-info-container");
    
    const areaDiv = document.createElement("div");
    areaDiv.setAttribute("class", "area-container");

    
    const attractionDiv = document.createElement("div");
    attractionDiv.setAttribute("class", "attraction-container");
    
    const typeDiv = document.createElement("div");
    typeDiv.setAttribute("class", "type-container");
    console.log(parkDiv);
    mainContent.appendChild(attractionDiv);
    mainContent.insertBefore(typeDiv, attractionDiv);
    mainContent.insertBefore(areaDiv, typeDiv);
    mainContent.insertBefore(parkDiv, areaDiv);
}

module.exports = buildDOM;