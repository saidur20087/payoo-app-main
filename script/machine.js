
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;
}


function getBlance (){
    const blanceElement = document.getElementById("blance");
    const blance = blanceElement.innerText;
    console.log("Current Blance",Number(blance) )
    return Number(blance);
}
function setBlance (value){
    const blanceElement = document.getElementById("blance");
   blanceElement.innerText=value;
}


// function showOnly(id){
//     const addMoney = document.getElementById("add-money")
//     const cashout = document.getElementById("cashout")
//     // console.log(`Add Money- ${addMoney}, cashout-${cashout}`)
//     addMoney.classList.add("hidden")
//     cashout.classList.add("hidden")

//     const selected =document.getElementById(id);
//     selected.classList.remove("hidden");
// }



function showOnly(id) {
    // আপনার সবকটি সেকশনের ID লিস্ট
    const sections = [
        "add-money", 
        "cashout", 
        "transfer-money", 
        "get-bonus", 
        "pay-bill", 
        "transactions"
    ];

    // ১. প্রথমে লুপ চালিয়ে সব লুকিয়ে ফেলুন
    for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.classList.add("hidden");
        }
    }

    // ২. এবার শুধু ক্লিক করা সেকশনটি দেখান
    const selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.classList.remove("hidden");
    }
}