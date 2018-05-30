// get a reference to the sms or call radio buttons
var settingsField = document.querySelector('.billItemTypeWithSettings');
// get references to all the settings fields
var callCostSetting = document.querySelector('.callCostSetting');
var smsCostSetting = document.querySelector('.smsCostSetting');
var warningLevel = document.querySelector('.warningLevelSetting');
var criticalLevel = document.querySelector('.criticalLevelSetting');
//get a reference to the add button
var addBtn = document.querySelector('.settingsAddBtn');
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector('.updateSettings');
// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');

var factorySettings = Settings();

function addBtnClicked() {
  totalSettings.classList.remove('warning');
  totalSettings.classList.remove('danger');
  var checkdRdioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkdRdioBtn) {
    var checkedBill = checkdRdioBtn.value;
    factorySettings.WhichType(checkedBill);
  }
  callTotalSettings.innerHTML = factorySettings.Calls();
  smsTotalSettings.innerHTML = factorySettings.Sms();
  totalSettings.innerHTML = factorySettings.BothEqual();
  totalSettings.classList.add(factorySettings.totalAlert());
}

addBtn.addEventListener('click',
  function() {
    addBtnClicked();
  });
updateSettings.addEventListener('click', function() {
  var newCallCost = callCostSetting.value;
  var newSmsCost = smsCostSetting.value;
  var newWarning = warningLevel.value;
  var newCritical = criticalLevel.value;
  factorySettings.UpdateValues(newCallCost, newSmsCost, newWarning, newCritical);
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.