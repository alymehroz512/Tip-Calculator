document.getElementById("CalculateTip").addEventListener('click' , function(){
    
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const numberPeople = parseInt(document.getElementById("numberPeople").value);

    //alerting user
    if (isNaN(billAmount) || billAmount <=0) {
        alert('Please enter a valid bill amount');
        return;
    }
    if (isNaN(tipPercentage) || tipPercentage <=0) {
        alert('Please enter a valid Tip Percentage');
        return;
    }
    if (isNaN(numberPeople) || numberPeople <=0) {
        alert('Please enter a valid Number of People');
        return;
    }

    //logic for calculating
    const tipAmount = (billAmount * (tipPercentage / 100)) / numberPeople;
    const totalAmount = (billAmount + billAmount * (tipPercentage / 100)) / numberPeople;

    //display message after calculation
    document.getElementById("tipAmount").textContent = `Tip Amount (per person): $${tipAmount.toFixed(2)}`; //toFixed(2) is used to ensure that the output is formatted to two decimal places.
    document.getElementById("totalAmount").textContent = `Total Amount (per person): $${totalAmount.toFixed(2)}`;

});