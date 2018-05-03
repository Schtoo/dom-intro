// get a reference to the sms or call radio buttons
//var billStrElement = document.querySelector('.billItemTypeRadio');
//get a reference to the add button
var billButtn = document.querySelector('.radioBillAddBtn');
//create a variable that will keep track of the total bill
var totalCalls = document.querySelector('.callTotalTwo');
var totalSms = document.querySelector('.smsTotalTwo');
var totalBill = document.querySelector('.totalTwo');
var calls = 0;
var sms = 0;

function radioBillAddBtnClicked() {
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}
//  var billType = billStrElement.value.trim();
  if(billItemType === 'call') {
    calls += 2.75;
  }
  else if(billItemType === 'sms') {
    sms += 0.75;
  }
  totalCalls.innerHTML = calls.toFixed(2);
  totalSms.innerHTML = sms.toFixed(2);
  var total = calls + sms;
  totalBill.innerHTML = total.toFixed(2);

  if(total >= 30){
    totalBill.classList.add('warning');
  }
  if(total >= 50){
    totalBill.classList.add('danger');
  }
}
//add an event listener for when the add button is pressed
billButtn.addEventListener('click', radioBillAddBtnClicked);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
