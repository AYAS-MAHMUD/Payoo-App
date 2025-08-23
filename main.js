let sameBtn = document.querySelectorAll('.same-btn');
sameBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        sameBtn.forEach((b)=>
        b.classList.remove('bg-gray-200'))
        btn.classList.add('bg-gray-200')   
    })
})


// ADD MONEY BTN
let addMoneyBtn = document.getElementById('add-money-btn');

// Global Pin
const pin = 1234;

addMoneyBtn.addEventListener("click",(e)=>{
    let amountAdd = parseInt(document.getElementById('amountToAdd').value);
    let nitAmount = parseInt(document.getElementById('nit-amount').innerText);
    let acountNumber = document.getElementById('acountNumber').value;
    let pinNumber = parseInt(document.getElementById('pinNumber').value);
    e.preventDefault()
    
    if(pinNumber!==pin){
        alert("Incorrect Pin")
        return
    }
    if(acountNumber.length == 11){
        let total = nitAmount + amountAdd
        document.getElementById('nit-amount').innerText = total
        alert("Amount add successfully")
    }else{
        alert("Please provide 11 digit account number")
    }
})

// CASH OUT BTN
let withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("hello world")
    let agentNumber = document.getElementById('CashOut-A-N').value;
    let cashoutpin = parseInt(document.getElementById('cashOut-pin').value);
    let cashAmount = parseInt(document.getElementById('cashAmount').value);
    let nitAmount = parseInt(document.getElementById('nit-amount').innerText);
    console.log(nitAmount)
    console.log(cashAmount)
    console.log(agentNumber.length)
    console.log(cashoutpin)
    if(cashoutpin!==pin){
        alert("Incorrect Pin")
        return
    }
    if(agentNumber.length == 11){
        let total = nitAmount - cashAmount
        document.getElementById('nit-amount').innerText = total
        alert("Cash Out successfully")
    }else{
        alert("Please provide 11 digit account number")
    }
})



// click
let clickaddMoney = document.getElementById('clickaddMoney');
let clickCaseOut = document.getElementById('clickCaseOut');
// click section
let addMoneySection = document.getElementById('addMoneySection');
let cashoutSection = document.getElementById('cashoutSection');
clickaddMoney.addEventListener('click',()=>{
    addMoneySection.setAttribute('class','')
    cashoutSection.setAttribute('class','hidden')
})

clickCaseOut.addEventListener('click',()=>{
    cashoutSection.setAttribute('class','')
    addMoneySection.setAttribute('class','hidden')
})