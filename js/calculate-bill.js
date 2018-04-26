//get a reference to the calculate button
var billStringElement = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
var billTotalElement = document.querySelector('.billTotal');
// add event listener
var billStringField = document.querySelector('.billString');
function calculateBtnClicked() {
    var billString2 = billStringField.value;
    var billItems = billString2.split(",");
    var billTotal = 0;

    for(var i=0; i<billItems.length; i++) {
      var billItem = billItems[i].trim();
      if(billItem === "call") {
        billTotal += 2.75;
      }
      else if(billItem === "sms") {
        billTotal += 0.75;
      }
    }
    var roundedBillTotal = billTotal.toFixed(2);

    if(roundedBillTotal < 20.00) {
     billTotalElement.classList.remove('warning');
     billTotalElement.classList.remove('danger');
   }else if(roundedBillTotal > 20.00 && roundedBillTotal < 30.00) {
     billTotalElement.classList.add('warning');
     billTotalElement.classList.remove('danger');
   }
   else if(roundedBillTotal > 30.00) {
     billTotalElement.classList.remove('warning');
     billTotalElement.classList.add('danger');
   }
   billTotalElement.innerHTML = roundedBillTotal;
}

billStringElement.addEventListener('click', calculateBtnClicked);
//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
