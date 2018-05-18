function allBills() {
  var warningLevels = 0;
  var criticalLevels = 0;
  var callCost = 0;
  var smsCost = 0;

  var allCallsTotals = 0;
  var allSmsTotals = 0;
  var totals = 0;

  function WhichType(settingsField) {
    if (settingsField === 'call') {
      //allCalls += 2.75;
      if (totals < criticalLevels) {
        allCallsTotals += callCost;
      }
    }
    if (settingsField === 'sms') {
      //allSms += 0.75;
      if (totals < criticalLevels) {
        allSmsTotals += smsCost;
      }
    }
  }

  function CallCo() {
    return callCost.toFixed(2);
  }

  function SmsCo() {
    return smsCost.toFixed(2);
  }

  function OrangeLevel() {
    return warningLevel.toFixed(2);
  }

  function RedLevel() {
    return criticalLevel.toFixed(2);
  }

  function Calls() {
    return allCalls.toFixed(2);
  }

  function Sms() {
    return allSms.toFixed(2);
  }

  function BothEqual() {
    totals = allCalls + allSms;
    return totals.toFixed(2);
  }
  return {
    CallCo,
    SmsCo,
    OrangeLevel,
    RedLevel,
    WhichType,
    Calls,
    Sms,
    BothEqual
  }

  function Pfloats() {
    var newCalls = callCost.value;
    if (newCalls !== "") {
      allCallsTotals = parseFloat(newCalls);
    }
    var newSms = smsCost.value;
    if (newSms !== "") {
      allSmsTotals = parseFloat(newSms);
    }
    var critic = criticalLevels.value;
    if (critic !== "") {
      criticalLevels = parseFloat(critic);
    }
    var warn = warningLevels.value;
    if (warn !== "") {
      warningLevels = parseFloat(warn);
    }
  }
}