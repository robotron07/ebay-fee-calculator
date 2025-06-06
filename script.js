function calculateAdvancedProfit() {
  const salePrice = parseFloat(document.getElementById("salePrice").value);
  const shippingCharged = parseFloat(document.getElementById("shippingCharged").value);
  const shippingCost = parseFloat(document.getElementById("shippingCost").value);
  const itemCost = parseFloat(document.getElementById("itemCost").value);
  const ebayFeePercent = parseFloat(document.getElementById("ebayFeePercent").value);
  const fixedFee = parseFloat(document.getElementById("fixedFee").value);

  if ([salePrice, shippingCharged, shippingCost, itemCost, ebayFeePercent, fixedFee].some(isNaN)) {
    document.getElementById("result").innerText = "Please fill in all fields.";
    return;
  }

  const grossRevenue = salePrice + shippingCharged;
  const ebayFee = (grossRevenue * ebayFeePercent / 100) + fixedFee;
  const totalCost = ebayFee + shippingCost + itemCost;
  const netProfit = grossRevenue - totalCost;

  const formulaExplanation = `
    Net Profit = (${salePrice.toFixed(2)} + ${shippingCharged.toFixed(2)}) - (${ebayFee.toFixed(2)} + ${shippingCost.toFixed(2)} + ${itemCost.toFixed(2)})<br>
    Net Profit = ${grossRevenue.toFixed(2)} - ${totalCost.toFixed(2)} = ${netProfit.toFixed(2)}
  `;

  document.getElementById("result").innerHTML = `
    Gross Revenue: $${grossRevenue.toFixed(2)}<br>
    eBay Fee: $${ebayFee.toFixed(2)}<br>
    Total Cost: $${totalCost.toFixed(2)}<br>
    <strong>Net Profit: $${netProfit.toFixed(2)}</strong><br><br>
    <small><strong>Calculation:</strong><br>${formulaExplanation}</small>
  `;
}

function resetCalculator() {
  document.getElementById("salePrice").value = "";
  document.getElementById("shippingCharged").value = "";
  document.getElementById("shippingCost").value = "";
  document.getElementById("itemCost").value = "";
  document.getElementById("ebayFeePercent").value = "13.25";
  document.getElementById("fixedFee").value = "0.30";
  document.getElementById("result").innerHTML = "";
}




