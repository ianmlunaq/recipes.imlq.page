"use strict";

// const MAX_CHARS = 3;

let fNameBox = document.getElementById("fName");
// let warningBox = document.getElementById("warningBox");
let submitButton = document.getElementById("submit");

let recipesMadeCheckboxes = document.querySelectorAll("div#recipes-made input")
let recipesMadeSelection = [];

fNameBox.addEventListener("click", validateName)

document.getElementById("recipes-made").onclick = function () {
    recipesMadeSelection = []
    recipesMadeCheckboxes.forEach(
        function (node) {
            if (node.checked) {
                recipesMadeSelection.push(node);
            }
        }
    );
    console.log(recipesMadeSelection);
}



function validateName() {
    fNameBox.checkValidity();

    if (fNameBox.validity.patternMismatch) {
        fNameBox.setCustomValidity("Your first name must be exactly 3 characters long");
    } else {
        fNameBox.setCustomValidity("");
    }
    // warningBox.innerHTML = "";
    // let charCount = countCharacters(fNameBox.value);

    // try {
    //     if(charCount > MAX_CHARS) throw "First name must be 3 characters or less"
    // } catch (error) {
    //     warningBox.innerHTML = "First name must be 3 characters or less"
    // }
}

submitButton.onclick = function() {
    validateName();
}

// function countCharacters(textStr) {
//     var commentregx = /\s/g;
//     var chars = textStr.replace(commentregx, "");
//     return chars.length;
// }

/*
    I mostly used the Firefox debugging tools to see
    where the browser was running into trouble when it
    tried to run my code.
*/
