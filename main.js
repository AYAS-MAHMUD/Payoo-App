let sameBtn = document.querySelectorAll('.same-btn');
sameBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        sameBtn.forEach((b)=>
        b.classList.remove('bg-gray-200')
        )
        btn.classList.add('bg-gray-200')   
    })
})

// Get the Parse value
function parseValue(value){
    const getvalue = document.getElementById(value);
    const valuee = getvalue.value
    const parse = parseInt(valuee)
    return parse
}
// Get just value
function justValue(value){
    const getvalue = document.getElementById(value)
    const valuee = getvalue.value
    return valuee
}
// To get parse text
function parseText(value){
    const getvalue = document.getElementById(value);
    const valuee = getvalue.innerText
    const parse = parseInt(valuee)
    return parse
}
// To getElement just
function getelement(value){
    const getvalue = document.getElementById(value);
    return getvalue
}
// ADD MONEY BTN
let addMoneyBtn = getelement('add-money-btn');

// Global Pin
const pin = 1234;

addMoneyBtn.addEventListener("click",(e)=>{
    let amountAdd = parseValue('amountToAdd');
    let nitAmount = parseText('nit-amount');
    let acountNumber = justValue('acountNumber');
    let pinNumber = parseValue('pinNumber');
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
let withdrawBtn = getelement('withdrawBtn');
withdrawBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let agentNumber = justValue('CashOut-A-N');
    let cashoutpin = parseValue('cashOut-pin');
    let cashAmount = parseValue('cashAmount');
    let nitAmount = parseText('nit-amount');
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
// TRANSFER MONEY BTN
let sendNow = getelement('sendNow');
sendNow.addEventListener('click',(e)=>{
    e.preventDefault()
    let agentNumber = justValue('transferNumber');
    let cashoutpin = parseValue('transferPin');
    let cashAmount = parseValue('transferAmount');
    let nitAmount = parseText('nit-amount');
    if(cashoutpin!==pin){
        alert("Incorrect Pin")
        return
    }
    if(agentNumber.length == 11){
        let total = nitAmount - cashAmount
        document.getElementById('nit-amount').innerText = total
        alert("Transfer successfully")
    }else{
        alert("Please provide 11 digit account number")
    }
})
// GET BONUS BTN
let getBonus = getelement('getBonus');
getBonus.addEventListener('click',(e)=>{
    e.preventDefault()
    let nitAmount = parseText('nit-amount');
    let bonusCoupon = justValue('bonusCoupon');
    if (bonusCoupon.toUpperCase()=='LOVE YOU'){
        let total = nitAmount + 500;
        document.getElementById('nit-amount').innerText = total
        alert("Bonus add successfully")
    }
})
// pay-Bill-btn click
let payBill = getelement('pay-Bill-btn');
payBill.addEventListener('click',(e)=>{
    e.preventDefault()
    let amountAdd = parseValue('payBillAmount');
    let nitAmount = parseText('nit-amount');
    let acountNumber = justValue('payBillNumber');
    let pinNumber = parseValue('payBillpinNumber');
    
    if(pinNumber!==pin){
        alert("Incorrect Pin")
        return
    }
    if(acountNumber.length == 11){
        let total = nitAmount - amountAdd
        document.getElementById('nit-amount').innerText = total
        alert("Pay Bill successfully")
    }else{
        alert("Please provide 11 digit account number")
    }
})



// click
let clickaddMoney = getelement('clickaddMoney');
let clickCaseOut = getelement('clickCaseOut');
let clickTransfer = getelement('clickTransfer');
let clickBonus = getelement('clickBonus');
let clickPayBill = getelement('clickPayBill');
let clickTransaction = getelement('clickTransaction');
// click section
let addMoneySection = getelement('addMoneySection');
let cashoutSection = getelement('cashoutSection');
let transferSection = getelement('transferSection');
let BonusSection = getelement('BonusSection');
let payBillSection = getelement('payBillSection');
let transactionSection = getelement('transactionSection');
// click Add money
clickaddMoney.addEventListener('click',()=>{
    addMoneySection.setAttribute('class','')
    cashoutSection.setAttribute('class','hidden')
    transferSection.setAttribute('class','hidden')
    BonusSection.setAttribute('class','hidden')
    payBillSection.setAttribute('class','hidden')
    transactionSection.setAttribute('class','hidden')
})
// click caseout money
clickCaseOut.addEventListener('click',()=>{
    cashoutSection.setAttribute('class','')
    addMoneySection.setAttribute('class','hidden')
    transferSection.setAttribute('class','hidden')
    BonusSection.setAttribute('class','hidden')
    payBillSection.setAttribute('class','hidden')
    transactionSection.setAttribute('class','hidden')
})
// click transfer money
clickTransfer.addEventListener('click',()=>{
    transferSection.setAttribute('class','')
    addMoneySection.setAttribute('class','hidden')
    cashoutSection.setAttribute('class','hidden')
    BonusSection.setAttribute('class','hidden')
    payBillSection.setAttribute('class','hidden')
    transactionSection.setAttribute('class','hidden')
})

// click get bonus
clickBonus.addEventListener('click',()=>{
    BonusSection.setAttribute('class','')
    addMoneySection.setAttribute('class','hidden')
    cashoutSection.setAttribute('class','hidden')
    transferSection.setAttribute('class','hidden')
    payBillSection.setAttribute('class','hidden')
    transactionSection.setAttribute('class','hidden')
})
// Click pay bill 
clickPayBill.addEventListener('click',()=>{
    payBillSection.setAttribute('class','')
    addMoneySection.setAttribute('class','hidden')
    cashoutSection.setAttribute('class','hidden')
    transferSection.setAttribute('class','hidden')
    BonusSection.setAttribute('class','hidden')
    transactionSection.setAttribute('class','hidden')
})

// Click transaction 
clickTransaction.addEventListener('click',()=>{
    transactionSection.setAttribute('class','')
    addMoneySection.setAttribute('class','hidden')
    cashoutSection.setAttribute('class','hidden')
    transferSection.setAttribute('class','hidden')
    BonusSection.setAttribute('class','hidden')
    payBillSection.setAttribute('class','hidden')
})