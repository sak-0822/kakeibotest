function onclickSubmit() {
    var possElem = document.getElementById("possesion")
    var costElem = document.getElementById("cost");
    var outputPossElem = document.getElementById("outputPoss")

    var poss = Number(possElem.value);
    var cost = Number(costElem.value);
    var result = calcBalance(poss, cost);

    outputPossElem.value = result;
    possElem.value = result;
}

function calcBalance(poss, amount) {
    var result = poss - amount;
    return result
}