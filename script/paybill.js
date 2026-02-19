document.getElementById("pay-bill-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const amount = getValueFromInput("pay-bill-amount");
    const pin = getValueFromInput("pay-bill-pin");
    const billType = getValueFromInput("pay-bill-biller");

    if (billType === "Select back") {
        alert("Please select a bill type");
        return;
    }

    if (pin === "1234") {
        const currentBalance = getBlance();
        if (Number(amount) > currentBalance) {
            alert("Not enough money to pay bill");
            return;
        }

        const newBalance = currentBalance - Number(amount);
        setBlance(newBalance);
        alert(`${billType} bill paid successfully!`);

        // এই অংশটুকু অন্য সব ফাংশনের ভেতর সেট ব্যালেন্সের নিচে বসিয়ে দিন
const container = document.getElementById("transaction-container");
const div = document.createElement("div");
div.classList.add("bg-white", "p-3", "rounded-xl", "shadow-sm", "border-l-4", "border-primary");
div.innerHTML = `
    <h4 class="font-bold">Paybill</h4>
    <p class="text-xs text-gray-500">${amount} Amount Deducted. New Balance: ${newBalance}</p>
`;
container.appendChild(div);
    } else {
        alert("Wrong Pin!");
    }
});