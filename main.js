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
// transaction data
const transactionData = [];
// Add money
addMoneyBtn.addEventListener("click",(e)=>{
    let amountAdd = parseValue('amountToAdd');
    let nitAmount = parseText('nit-amount');
    let acountNumber = justValue('acountNumber');
    let pinNumber = parseValue('pinNumber');
    e.preventDefault()
    
    if(amountAdd<=0){
        alert("Please provide valid amount")
        return;
    }
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

    const data = {
        name:"Add Money",
        date: new Date().toLocaleString()
    }
    transactionData.push(data)
})

// CASH OUT BTN
let withdrawBtn = getelement('withdrawBtn');
withdrawBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let agentNumber = justValue('CashOut-A-N');
    let cashoutpin = parseValue('cashOut-pin');
    let cashAmount = parseValue('cashAmount');
    let nitAmount = parseText('nit-amount');
    if(nitAmount<cashAmount){
        alert("Insufficient Balance")
        return;
    }
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

    const data = {
        name:"Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    
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
    const data = {
        name:"Transfer Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
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
    const data = {
        name:"Get Bonus",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
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
    const data = {
        name:"Pay Bill",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})

// transaction section

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

    const transactionContainer = document.getElementById('transaction-container');
   transactionContainer.innerHTML = '';
   transactionData.forEach(item => {
       const div = document.createElement('div');
       div.innerHTML = `<div class="navbar bg-base-100 shadow-sm rounded-xl mb-3">
          <div class="flex-1">
            <div class="flex gap-4 items-center">
              <div class="bg-gray-200 p-2 rounded-full">
                  <img class="" src="./assets/wallet1.png" alt="">
              </div>
              <div>
                <h1 class="font-semibold text-lg">${item.name}</h1>
                <p>${item.date}</p>
              </div>
            </div>
          </div>
          <div class="flex-none">
            <button class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
            </button>
          </div>
        </div>`;
       transactionContainer.appendChild(div);
   });
})