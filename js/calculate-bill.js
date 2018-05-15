var billStringElement = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
var billTotalElement = document.querySelector('.billTotal');
// add event listener
var billStringField = document.querySelector('.billString');

var roundedBillTotal = 0;

function calculateBtnClicked(billString2) {
  var billTotal = 0;
  var billItems = billString2.split(",");
  for (var i = 0; i < billItems.length; i++) {
    var billItem = billItems[i].trim();
    if (billItem === "call") {
      billTotal += 2.75;
    } else if (billItem === "sms") {
      billTotal += 0.75;
    }
  }
  return billTotal.toFixed(2);
}

billStringElement.addEventListener('click',
  function() {
    var billString2 = billStringField.value;
    roundedBillTotal = calculateBtnClicked(billString2);
    billTotalElement.innerHTML = roundedBillTotal;
    if (roundedBillTotal < 20.00) {
      billTotalElement.classList.remove('warning');
      billTotalElement.classList.remove('danger');
    } else if (roundedBillTotal > 20.00 && roundedBillTotal < 30.00) {
      billTotalElement.classList.add('warning');
      billTotalElement.classList.remove('danger');
    } else if (roundedBillTotal > 30.00) {
      billTotalElement.classList.remove('warning');
      billTotalElement.classList.add('danger');
    }
  }
);