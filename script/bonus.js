document.getElementById("bonus-btn").addEventListener("click", function (event) {
   
    event.preventDefault();

    
    const coupon = getValueFromInput("bonus-coupon");

    
    if (coupon === "PAYOO20") {
        const currentBlance = getBlance();
        const bonusAmount = 50; 
        const newBlance = currentBlance + bonusAmount;

 
        setBlance(newBlance);
        alert("Congrats! You got $50 Bonus.");

        const container = document.getElementById("transaction-container");
        if (container) {
            const div = document.createElement("div");
            div.classList.add("bg-white", "p-3", "rounded-xl", "shadow-sm", "border-l-4", "border-green-500", "mb-3");
            div.innerHTML = `
                <h4 class="font-bold">Get Bonus</h4>
                <p class="text-xs text-gray-500">$${bonusAmount} Added via Coupon. New Balance: $${newBlance}</p>
            `;
            container.appendChild(div);
        }
    } else {
        alert("Invalid Coupon! Please try again.");
    }
});