// get a reference to the sms or call radio buttons
//var billStrElement = document.querySelector('.billItemTypeRadio');
//get a reference to the add button
var billButtn = document.querySelector('.radioBillAddBtn');
//create a variable that will keep track of the total bill
var totalCall = document.querySelector('.callTotalTwo');
var totaSms = document.querySelector('.smsTotalTwo');
var totalBill = document.querySelector('.totalTwo');
// var calls = 0;
// var sms = 0;
// var total = 0;

var allCalculation = Bills();

function radioBillAddBtnClicked() {
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value;
    allCalculation.Type(billItemType);
  }
  totalCall.innerHTML = allCalculation.CallSum();
  totaSms.innerHTML = allCalculation.SmsSum();
  totalBill.innerHTML = allCalculation.TotalCalc();
}

function screenB() {
  var sumOf = allCalculation.TotalCalc();
  if (sumOf >= 30) {
    totalBill.classList.add('warning');

  }
  if (sumOf >= 50) {
    totalBill.classList.remove('warning');
    totalBill.classList.add('danger')
  }
}
//add an event listener for when the add button is pressed
billButtn.addEventListener('click',
  function() {
    radioBillAddBtnClicked();
    screenB();
  }
);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen