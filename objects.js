function ServingsAmount(servingsFactor, nodeList) {
    this.servingsFactor = parseInt(servingsFactor);
    this.originalIngredientsAmount = Array.from(nodeList);
}

ServingsAmount.prototype.calculateIngredients = function (index) {
    return this.originalIngredientsAmount[index] * this.servingsFactor;
}