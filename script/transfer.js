document.getElementById("transfer-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const amount = getValueFromInput("transfer-amount");
    const pin = getValueFromInput("transfer-pin");
    const account = getValueFromInput("transfer-number");

    if (account.length !== 11) {
        alert("Invalid Account Number");
        return;
    }

    if (pin === "1234") {
        const currentBalance = getBlance();
        if (Number(amount) > currentBalance) {
            alert("Insufficient Balance");
            return;
        }
        
        const newBalance = currentBalance - Number(amount);
        setBlance(newBalance);
        alert("Transfer Successful!");
    } else {
        alert("Wrong Pin!");
    }
});