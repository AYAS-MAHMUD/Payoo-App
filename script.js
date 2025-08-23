let number = document.getElementById("numberinp");
let pin = document.getElementById("pininp");
document.getElementById("loginbtn").addEventListener("click",(e)=>{
    e.preventDefault()
    const mobilenumber = 1863199573;
    const pinNumber = 1234;
    console.log(number.value)
    console.log(pin.value)
    if(mobilenumber==number.value && pinNumber==pin.value){
        window.location.href = "main.html";
    }else{
        if(mobilenumber!=number.value){
            alert("Invalid Mobile Number")
        }else{
            alert("Invalid Pin")
        }
    }
})