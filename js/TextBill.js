function Bills() {
  var callTotal = 0;
  var smsTotal = 0;
  var totalCost = 0;

  function Type(billElement) {
    if (billElement === 'call') {
      callTotal += 2.75;
    } else if (billElement === 'sms') {
      smsTotal += 0.75;
    }
  }

  function CallSum() {
    return callTotal.toFixed(2);
  }

  function SmsSum() {
    return smsTotal.toFixed(2);
  }

  function TotalCalc() {
    totalCost = callTotal + smsTotal;
    return totalCost.toFixed(2);
  }
  return {
    Type,
    CallSum,
    SmsSum,
    TotalCalc
  }
}