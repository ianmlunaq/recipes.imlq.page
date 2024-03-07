"use strict";

let qString = location.search.slice(1);

qString = qString.replace(/\+/g, " ");
qString = decodeURIComponent(qString);
let formData = qString.split(/&/g);

if (formData.length > 1) {
    localStorage.clear();
}

for (let items of formData) {
    let fieldValuePair = items.split(/=/);
    let fieldName = fieldValuePair[0];
    let fieldValue = fieldValuePair[1];

    localStorage.setItem(fieldName, fieldValue);
}

let keys = ["first-name", "last-name", "favRecipe", "made-champurrado", "made-chocoflan", "made-curry-udon", "made-soda-bread", "made-chocomil", "made-fried-rice", "best-website"];

for (let item of keys) {
    let newRow = document.createElement("tr");

    let keyCell = document.createElement("td");
    keyCell.textContent = item;
    newRow.appendChild(keyCell);

    let keyValue = document.createElement("td");
    keyValue.textContent = localStorage.getItem(item);
    newRow.appendChild(keyValue);

    document.getElementById("submission-table").appendChild(newRow);
}

document.getElementById("delete-button").onclick = function () {
    localStorage.clear();
    window.location.href = "survey-submission.html";
}