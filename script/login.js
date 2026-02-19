
console.log("wow paisi");
document.getElementById("login-btn").addEventListener("click",function(){
    const inputNumber = document.getElementById("input-number");
    const rightNumber = inputNumber.value;
    console.log(rightNumber)

    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

   if(rightNumber == "01234567890" && pin == "1234"){
    alert("Login Successfull")

    window.location.href = "home.html";

   }else{
    alert("Loing Filed")
    return;
   }
})