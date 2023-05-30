"use strict";
//The start of program exicution.
window.onload = function () {
  startUp();
};

function colorSetOfTabs(htmlCollection) {
  for (const item of htmlCollection) {
    item.style.backgroundColor = tabColors[tabColorIndex];
    if (tabColorIndex === tabColors.length - 1) {
      tabColorIndex = 0;
    } else {
      tabColorIndex++;
    }
  }
}
//Start Up
function startUp() {
  colorSetOfTabs(document.getElementsByClassName("gridAItem"));
  colorSetOfTabs(document.getElementsByClassName("gridBItem"));
  colorSetOfTabs(document.getElementsByClassName("gridCItem"));
  colorSetOfTabs(document.getElementsByClassName("gridDItem"));
}
let tabColorIndex = 0;
const tabColors = [
  "#2de11d",
  "#4848e8",
  "#e84d4d",
  "Orange",
  "Violet",
  "#820ee8",
  "#8e7fc7",
  "#ff008b",
  "#4dc6e8",
  "#17abf5",
  "#4c69bd",
  "#e251dc",
  "#bbb70e",
];
