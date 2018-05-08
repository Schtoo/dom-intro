// get a reference to the sms or call radio buttons
var settingsField = document.querySelector('.billItemTypeWithSettings');
// get references to all the settings fields
var callCostSetting = document.querySelector('.callCostSetting');
var smsCostSetting = document.querySelector('.smsCostSetting');
var warningLevel = document.querySelector('.warningLevelSetting');
var criticalLevel = document.querySelector('.criticalLevelSetting');
//get a reference to the add button
var addBtn = document.querySelector('.addBtn');
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector('.updateSettings');
// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var warning = 0;
var critical = 0;
// create a variables that will keep track of all three totals.
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');

var totalCalls = 0;
var totalSms = 0;



function addBtnClicked() {
  var checkdRdioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  var billItemTypeWithSettings = checkdRdioBtn.value.trim();
  if (billItemTypeWithSettings === 'call') {
    totalCalls += callCost;
  } else if (billItemTypeWithSettings === 'sms') {
    totalSms += smsCost;
  }

  callTotalSettings.innerHTML = totalCalls.toFixed(2);
  smsTotalSettings.innerHTML = totalSms.toFixed(2);
  var totalCosts = totalCalls + totalSms;
  totalSettings.innerHTML = totalCosts.toFixed(2);

  if (totalCosts >= warningLevel) {
    totalSettings.classList.add('warning');
  } else if (totalCosts >= criticalLevel) {
    totalSettings.classList.add('danger');
  }
}

function updateValues() {

  var newCallCost = callCostSetting.value;
  if (newCallCost !== "") {
    callCost = parseFloat(newCallCost);
  }
  var newSmsCost = smsCostSetting.value;
  if (newCallCost !== "") {
    smsCost = parseFloat(newSmsCost);
  }
  var newWarning = warningLevel.value;
  if (newCallCost !== "") {
    warning = parseFloat(newWarning);
  }
  var newCritical = criticalLevel.value;
  if (newCallCost !== "") {
    critical = parseFloat(newCritical);
  }

}

// function addBtnClicked() {
//   var checkdRdioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
//   if (checkdRdioBtn) {
//     var billItemTypeWithSetting = checkdRdioBtn.value;
//   }
//   if (billItemTypeWithSetting === 'call') {
//     callCost += totalCost;
//   }
//   if (billItemTypeWithSetting === 'sms') {
//     smsCost += totalSms;
//   }
//   callTotalSettings.innerHTML = totalCalls.toFixed(2);
//   smsTotalSettings.innerHTML = totalSms.toFixed(2);
//   var Costs = totalCalls + totalSms;
//   totalSettings.innerHTML = Costs.toFixed(2);
// }
// // billItemType will be 'call' or 'sms'
//
// //add an event listener for when the 'Update settings' button is pressed
//addBtn.addEventListener('click', updateBtn);
//add an event listener for when the add button is pressed
addBtn.addEventListener('click', addBtnClicked);
updateSettings.addEventListener('click', updateValues);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.