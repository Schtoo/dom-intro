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
var totalCosts = 0;

function addBtnClicked() {
  var checkdRdioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  var billItemTypeWithSettings = checkdRdioBtn.value.trim();
  if (billItemTypeWithSettings === 'call') {
    //totalCalls += callCost;
    if (totalCosts < critical) {
      totalCalls += callCost;
    }
  } else if (billItemTypeWithSettings === 'sms') {
    // totalSms += smsCost;
    if (totalCosts < critical) {
      totalSms += smsCost;
      //  totalCalls += callCost;
      if (totalCosts < critical) {
        totalCalls += callCost;
      }
    } else if (billItemTypeWithSettings === 'sms') {
      //  totalSms += smsCost;
      if (totalCosts < critical) {
        totalSms += smsCost;
      }
    }
  }
  callTotalSettings.innerHTML = totalCalls.toFixed(2);
  smsTotalSettings.innerHTML = totalSms.toFixed(2);
  totalCosts = totalCalls + totalSms;
  totalSettings.innerHTML = totalCosts.toFixed(2);

  if (totalCosts >= warning && totalCosts >= critical) {
    totalSettings.classList.add('warning');
    totalSettings.classList.add('danger');
  }
  if (totalCosts <= critical && totalCosts >= warning) {
    totalSettings.classList.remove('danger');
    totalSettings.classList.add('warning');
  }
  if (totalCosts < warning && totalCosts < critical) {
    totalSettings.classList.remove('warning');
    totalSettings.classList.remove('danger');
  }
  totalSettings.innerHTML = totalCosts.toFixed(2);

  if (totalCosts >= warning) {
    totalSettings.classList.add('warning');
  }
  if (totalCosts >= critical) {
    totalSettings.classList.add('danger');
  }
  if (totalCosts >= critical) {
    totalSettings.classList.add('danger');
    totalSettings.classList.remove('warning');
  }
}

function updateValues() {
  var newCallCost = callCostSetting.value;
  if (newCallCost !== "") {
    callCost = parseFloat(newCallCost);
  }
  var newSmsCost = smsCostSetting.value;
  if (newSmsCost !== "") {
    smsCost = parseFloat(newSmsCost);
  }
  var newWarning = warningLevel.value;
  if (newWarning !== "") {
    warning = parseFloat(newWarning);
  }
  var newCritical = criticalLevel.value;
  if (newCritical !== "") {
    critical = parseFloat(newCritical);
  }
}

addBtn.addEventListener('click', addBtnClicked);

updateSettings.addEventListener('click', updateValues);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.