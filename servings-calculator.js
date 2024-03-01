const ingredients = document.querySelectorAll(".ingredient");
let ingredientsOriginalAmount = [];

ingredients.forEach(
    function (node) {
        ingredientsOriginalAmount.push(parseFloat(node.textContent));
    }
);

document.getElementById("servings").onchange = function() {
    let servingsNum = document.getElementById("servings").value;

    let servings = new ServingsAmount(servingsNum, ingredientsOriginalAmount);

    for (let i = 0; i < ingredients.length; i++) {
        ingredients[i].textContent = servings.calculateIngredients(i);
    }
}
