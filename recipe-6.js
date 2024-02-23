document.getElementById("servings").onclick = function() {
    let servings = document.getElementById("servings").value,
    cake = 1,
    sugar =1,
    conMilk = 14,
    evaMilk = 12,
    eggs = 6,
    vanilla = 1,
    cheese = 4;
    document.getElementById("cake").innerHTML = servings * cake;
    document.getElementById("sugar").innerHTML = servings * sugar;
    document.getElementById("conMilk").innerHTML = servings * conMilk;
    document.getElementById("evaMilk").innerHTML = servings * evaMilk;
    document.getElementById("eggs").innerHTML = servings * eggs;
    document.getElementById("vanilla").innerHTML = servings * vanilla;
    document.getElementById("cheese").innerHTML = servings * cheese;
}

