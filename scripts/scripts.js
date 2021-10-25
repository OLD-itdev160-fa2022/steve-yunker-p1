var price = 40,
    seniorDiscount = .10,
    studentDiscount = .20,
    childDiscount = .25,
    seniorPrice = price - (price * seniorDiscount),
    studentPrice = price - (price * studentDiscount),
    childPrice = price - (price * childDiscount),
    priceEl = document.getElementById('price'),
    seniorPriceEl = document.getElementById('senior-price'),
    studentPriceEl = document.getElementById('student-price'),
    childPriceEl = document.getElementById('child-price');

    priceEl.textContent = price.toFixed();
    seniorPriceEl.textContent = seniorPrice.toFixed();
    studentPriceEl.textContent = studentPrice.toFixed();
    childPriceEl.textContent = childPrice.toFixed();

function getTotal(){
    var quantityAdult = Number(document.getElementById("quantityAdult").value);
    var quantitySenior = Number(document.getElementById("quantitySenior").value);
    var quantityStudent = Number(document.getElementById("quantityStudent").value);
    var quantityChildren = Number(document.getElementById("quantityChildren").value);

    var total = 0;

    total = (quantityAdult * 40) + (quantitySenior * 36) + (quantityStudent * 32) +
    (quantityChildren * 30);

    document.getElementById("total").innerHTML = "Total: $"+String(total);
}