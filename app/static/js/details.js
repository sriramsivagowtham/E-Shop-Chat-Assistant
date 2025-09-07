var buy_quantity = document.getElementById("buy-quantity");
var price = document.getElementById("price");
var total_amount = document.getElementById("total");

// Extract number from PRICE: ₹ 500 format
var priceText = price.textContent.replace(/[^0-9]/g, "");  
var priceValue = Number(priceText);

// Listen for user input
buy_quantity.addEventListener("input", function () {
    var quantityValue = Number(buy_quantity.value);
    var total = quantityValue * priceValue;

    if (!isNaN(total)) {
        total_amount.value = total;
    } else {
        total_amount.value = "";
    }
});


