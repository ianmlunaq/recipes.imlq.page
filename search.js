"use strict";

let search = document.getElementById("search-bar");
let recipeCards = document.querySelectorAll(".recipe-collection .recipe-card");

search.addEventListener("input", () => {
    let searchValue = search.value.toLowerCase().trim();
    console.log(searchValue);

    recipeCards.forEach(recipe => {
        let recipeName = recipe.querySelector(".recipe-name").innerHTML.toLowerCase();
        let isMatch = recipeName.includes(searchValue);

        recipe.hidden = !isMatch;
    })
})
