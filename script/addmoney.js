document.getElementById("add-money-btn").addEventListener("click", function () {
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount === "Select a Bank") {
        alert("Please Select a Bank")
        return;
    }

    const accountNumber = getValueFromInput("add-money-number");
    if (accountNumber.length != 11) {
        alert("Invalid A/C No.")
        return;
    }

    const amount = getValueFromInput("add-money-amount");
    const currentBlance = getBlance();
    const newBlance = currentBlance + Number(amount); 

    const pin = getValueFromInput("add-money-pin");

    if (pin === "1234") {
        alert("Add Money Success");
        setBlance(newBlance);

        const container = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.classList.add("bg-white", "p-3", "rounded-xl", "shadow-sm", "border-l-4", "border-primary", "mb-3");
        
        div.innerHTML = `
            <h4 class="font-bold">Add Money: ${bankAccount}</h4>
            <p class="text-xs text-gray-500">${amount} $ Added. New Balance: ${newBlance}</p>
        `;
        
        container.appendChild(div);
        // ---------------------------------

    } else {
        alert("Invalid Pin");
        return;
    }
});