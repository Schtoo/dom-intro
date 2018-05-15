// get a reference to the textbox where the bill type is to be entered
var billElement = document.querySelector('.billTypeText');
//get a reference to the add button
var billBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callsTotal = document.querySelector('.callTotalOne');
var smsTotal = document.querySelector('.smsTotalOne');
var billTotal = document.querySelector('.totalOne');
// var callTotal = 0;
// var smssTotal = 0;
// var totalCost = 0;
var allCalculations = Bills();

function addToBillBtnClicked() {
  var billTypeEntered = billElement.value.trim();
  allCalculations.Type(billTypeEntered)
  // if (billTypeEntered === 'call') {
  //   callTotal += 2.75;
  // } else if (billTypeEntered === 'sms') {
  //   smssTotal += 0.75;
  // }
  callsTotal.innerHTML = allCalculations.CallSum().toFixed(2);
  smsTotal.innerHTML = allCalculations.SmsSum().toFixed(2);
  //  totalCost = callTotal + smssTotal;
  billTotal.innerHTML = allCalculations.TotalCalc().toFixed(2);

  if (allCalculations.TotalCalc() >= 30.00) {
    billTotal.classList.add('warning');
  }
  if (allCalculations.TotalCalc() >= 50.00) {
    billTotal.classList.add('danger');
  }
}
//add an event listener for when the add button is pressed
billBtn.addEventListener('click', addToBillBtnClicked);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen