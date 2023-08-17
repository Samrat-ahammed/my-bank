// deposit button function....
document.getElementById('btn-deposit').addEventListener('click',function(){
   const depositField = document.getElementById('deposit-field');
     const nDepositAmount = depositField.value;
     const nDepositAmountString = parseFloat(nDepositAmount);
    // show deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
   const pDepositTotal = depositTotalElement.innerText;
  const pDepositTotalString = parseFloat(pDepositTotal);

   const currentDeposit = pDepositTotalString + nDepositAmountString ;

   depositTotalElement.innerText = currentDeposit;
   depositField.value = '';

   const balanceTotal = document.getElementById('total-balance');
   const pBalance = balanceTotal.innerText;
   const pBalanceInt = parseFloat(pBalance);
   const currentBalance =  pBalanceInt + nDepositAmountString;
   balanceTotal.innerText = currentBalance;


})

// Withdraw function ............
document.getElementById('withdraw-button').addEventListener('click' , function(){

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    const withdrawInputInt = parseFloat(withdrawAmount);
    
    const withdrawBalance = document.getElementById('withdraw-balance');
    const withdrawInnerText = withdrawBalance.innerText;
    const withdrawInt = parseFloat(withdrawInnerText);
    const withdrawTotal = withdrawInputInt + withdrawInt;


    withdrawBalance.innerText = withdrawTotal;

    const balanceTotal = document.getElementById('total-balance');
    const pBalance = balanceTotal.innerText;
    const pBalanceInt = parseFloat(pBalance);
    const currentBalance =  pBalanceInt - withdrawInputInt;
    balanceTotal.innerText = currentBalance;

    withdrawInput.value='';
})

