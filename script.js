let number = document.getElementById("numberinp");
let pin = document.getElementById("pininp");
document.getElementById("loginbtn").addEventListener("click",(e)=>{
    e.preventDefault()
    const mobilenumber = 1863199573;
    const pinNumber = 1234;

    if(mobilenumber==number.value && pinNumber==pin.value){
        window.location.href = "main.html";
    }else{
        if(number.value=='' && pin.value==''){
            alert("Please Enter Mobile Number and Pin")
        }
        else if(mobilenumber!=number.value){
            alert("Invalid Mobile Number")
        }else{
            alert("Invalid Pin")
        }
    }
})