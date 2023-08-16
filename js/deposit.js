document.getElementById('btn-deposit').addEventListener('click',function(){
   const depositField = document.getElementById('deposit-field');
     const nDepositAmount = depositField.value;
     const nDepositAmountString = parseFloat(nDepositAmount);
    // show deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
   const pDepositTotal = depositTotalElement.innerText;
  const pDepositTotalString = parseFloat(pDepositTotal);

   const currentDeposit = pDepositTotalString + nDepositAmountString ;
//    console.log(depositTotal);
   depositTotalElement.innerText = currentDeposit;
   depositField.value = '';


})