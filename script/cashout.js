document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumber = getValueFromInput("cashout-number");

    if (cashoutNumber.length != 11) {
        alert("invalid Number");
        return;
    }

    const cashoutAmount = getValueFromInput("cashout-amount");
    const currentBlance = getBlance();
    const newBlance = currentBlance - Number(cashoutAmount);

    if (newBlance < 0) {
        alert("Invalid Amount");
        return;
    }

    const cashoutPin = getValueFromInput("cashout-pin");

    if (cashoutPin === "1234") {
        alert("Cashout Successful");
        setBlance(newBlance);

        // --- ট্রানজ্যাকশন হিস্ট্রি এখানে শুরু ---
        const container = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.classList.add("bg-white", "p-3", "rounded-xl", "shadow-sm", "border-l-4", "border-red-500", "mb-3");

        div.innerHTML = `
            <h4 class="font-bold">Cashout</h4>
            <p class="text-xs text-gray-500">${cashoutAmount} $ Deducted. New Balance: ${newBlance}</p>
        `;

        container.appendChild(div);
        // ------------------------------------

    } else {
        alert("Invalid pin");
        return;
    }
});


// document.getElementById("cashout-btn").addEventListener("click",function(){
//     const cashoutNumberInput=document.getElementById("cashout-number");
//     const cashoutNumber= cashoutNumberInput.value;
//     console.log(cashoutNumber);

//     if(cashoutNumber.length != 11){
//         alert("Invalid Number");
//         return;
//     }


//     const  cashoutAmountInput=document.getElementById("cashout-amount");
//     const  cashoutAmount= cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     const  blanceElement=document.getElementById("blance");
//     const  blance = blanceElement.innerText;
//     console.log(blance);

//     const newBlance= Number(blance) - Number (cashoutAmount);
//     console.log(newBlance);

//     if(newBlance < 0){
//         alert("Invalid Amount");
//         return;
//     }

//     const cashoutPinInput=document.getElementById("cashout-pin");

//     const pin = cashoutPinInput.value;
//     if(pin === "1234"){
//         alert("cashout Successfull")
//         console.log("new blance",newBlance);
//         blanceElement.innerText = newBlance;
//     }else{
//         alert("Invalid pin");
//         return;
//     }


// })