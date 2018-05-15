function Bills() {
  callTotal = 0;
  smsTotal = 0;
  totalCost = 0;

  function Type(billElement) {
    var text = billElement;
    if (text === 'call') {
      callTotal += 2.75;
    }
    if (text === 'sms') {
      smsTotal += 0.75;
    }
  }

  function CallSum() {
    return callTotal;
  }

  function SmsSum() {
    return smsTotal;
  }

  function TotalCalc() {
    totalCost = callTotal + smsTotal;
    return totalCost;
  }
  return {
    Type,
    CallSum,
    SmsSum,
    TotalCalc
  }
}