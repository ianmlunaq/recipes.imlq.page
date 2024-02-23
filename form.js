"use strict";

let fNameBox = document.getElementById("fName");
let submitButton = document.getElementById("submit");

let recipesMadeCheckboxes = document.querySelectorAll("div#recipes-made input")
let recipesMadeSelectionArray = [];
let recipesMadeString = "";

fNameBox.addEventListener("click", validateName)

document.getElementById("recipes-made").onclick = function () {
    recipesMadeSelectionArray = []
    recipesMadeCheckboxes.forEach(
        function (node) {
            if (node.checked) {
                recipesMadeSelectionArray.push(node.value);
            }
        }
    );
    recipesMadeString = recipesMadeSelectionArray.toString();
}



function validateName() {
    fNameBox.checkValidity();

    if (fNameBox.validity.patternMismatch) {
        fNameBox.setCustomValidity("Your first name must be exactly 3 characters long");
    } else {
        fNameBox.setCustomValidity("");
    }
}

submitButton.onclick = function() {
    validateName();
}

/*
    I mostly used the Firefox debugging tools to see
    where the browser was running into trouble when it
    tried to run my code.
*/
