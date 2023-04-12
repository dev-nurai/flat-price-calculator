//On Page Load

function init() {
  //Hide the HTML Elements on page load

  //Parking Options (Two/Four)

  //For Two Wheeler
  document.querySelector("#twoWheelerParking").style.display = "none";
  document.querySelector("#labelTwoWheeler").style.display = "none";

  //Open Parking
  document.querySelector("#twoWheelerOpenParking").style.display = "none";
  document.querySelector("#labelTwoWheelerOpenParking").style.display = "none";

  //Private Parking
  document.querySelector("#twoWheelerPrivateParking").style.display = "none";
  document.querySelector("#labelTwoWheelerPrivateParking").style.display =
    "none";
  document.querySelector("#twoWheelerParkingCharges").style.display = "none";

  //For Four Wheeler

  document.querySelector("#fourWheelerParking").style.display = "none";
  document.querySelector("#labelFourWheelerParking").style.display = "none";

  //Open Parking
  document.querySelector("#fourWheelerOpenParking").style.display = "none";
  document.querySelector("#labelFourWheelerOpenParking").style.display = "none";

  //Private Parking
  document.querySelector("#fourWheelerPrivateParking").style.display = "none";
  document.querySelector("#labelFourPrivateParking").style.display = "none";
  document.querySelector("#fourWheelerParkingCharges").style.display = "none";

  //Advance Maitntenace Textbox
  document.querySelector("#advancemaintenance").style.display = "none";

  //Alert Message
  document.querySelector(".alert").style.display = "none";

  //Input Validation Div class
  document.querySelector("#emptyPrice").style.display = "none";
  document.querySelector("#emptyStampDuty").style.display = "none";
}

init();

//Input - Flat Price (onkeyup)
function inputFlatPrice(){
  var price = document.getElementById("flatprice").value;
  console.log("Price is:", price);

  gst(price);
  registration(price);
  Scanning();
}

//GST amount

function gst(price) {
  let gstAmount = Math.floor(price * (18 / 100));
  console.log("GST:", gstAmount);

  let gstValue = document.getElementById("gstcharges");
  gstValue.value = gstAmount;
}

//Registratoion amount

function registration(price) {
  let registrationAmount;
  if (price > 3000000) {
    registrationAmount = 30000;
  } else {
    registrationAmount = Math.floor(price / 100);
  }

  let registrationValue = document.getElementById("registration");
  registrationValue.value = registrationAmount;
}

//Scanning Charges
function Scanning() {
  let scanningAmount = 10000;

  let scanningValue = document.getElementById("scanning");
  scanningValue.value = scanningAmount;
}

//on Check elements

//OC Checked, remove GST Elements
function removegst(checkbox) {
  if (checkbox.checked == true) {
    document.querySelector("#gstcharges").style.display = "none";
    document.querySelector("#labelgstcharges").style.display = "none";

  } else {
    document.querySelector("#gstcharges").style.display = "block";
    document.querySelector("#labelgstcharges").style.display = "block";

  }
}

//Parking Checked, Show two/Four
function parkingCharges(checkbox) {
  if (checkbox.checked == true) {
    document.querySelector("#twoWheelerParking").style.display = "block";
    document.querySelector("#labelTwoWheeler").style.display = "block";

    document.querySelector("#fourWheelerParking").style.display = "block";
    document.querySelector("#labelFourWheelerParking").style.display = "block";
  } else {
    document.querySelector("#twoWheelerParking").style.display = "none";
    document.querySelector("#labelTwoWheeler").style.display = "none";

    document.querySelector("#fourWheelerParking").style.display = "none";
    document.querySelector("#labelFourWheelerParking").style.display = "none";

    //Open Parking - Two Wheeler
    document.querySelector("#twoWheelerOpenParking").style.display = "none";
    document.querySelector("#labelTwoWheelerOpenParking").style.display =
      "none";

    //Private Parking - Two Wheeler
    document.querySelector("#twoWheelerPrivateParking").style.display = "none";
    document.querySelector("#labelTwoWheelerPrivateParking").style.display =
      "none";
      
      document.querySelector("#twoWheelerParkingCharges").style.display = "none";

    //Open Parking - Four Wheeler
    document.querySelector("#fourWheelerOpenParking").style.display = "none";
    document.querySelector("#labelFourWheelerOpenParking").style.display = "none";

  //Private Parking - Four Wheeler
    document.querySelector("#fourWheelerPrivateParking").style.display = "none";
    document.querySelector("#labelFourPrivateParking").style.display = "none";

    document.querySelector("#fourWheelerParkingCharges").style.display = "none";
  }
}

//Two/Four Checked, Show Open/Private

//Two Wheeler >> Open/Private Space
function twoWheeler(checkbox) {
  if (checkbox.checked === true) {
    //Open Parking
    document.querySelector("#twoWheelerOpenParking").style.display = "block";
    document.querySelector("#labelTwoWheelerOpenParking").style.display =
      "block";

    //Private Parking
    document.querySelector("#twoWheelerPrivateParking").style.display = "block";
    document.querySelector("#labelTwoWheelerPrivateParking").style.display =
      "block";
  } else {
    //Open Parking
    document.querySelector("#twoWheelerOpenParking").style.display = "none";
    document.querySelector("#labelTwoWheelerOpenParking").style.display =
      "none";

    //Private Parking
    document.querySelector("#twoWheelerPrivateParking").style.display = "none";
    document.querySelector("#labelTwoWheelerPrivateParking").style.display =
      "none";

      document.querySelector("#twoWheelerParkingCharges").style.display = "none";
      
  }
}

//Two Wheeler >> Private Space >> Text Box

function twoWheelerPrivateShow() {
  document.querySelector("#twoWheelerParkingCharges").style.display = "block";
}

function twoWheelerPrivateHide() {
  document.querySelector("#twoWheelerParkingCharges").style.display = "none";
}

// Four wheeler Checked Box
function fourWheeler(checkbox) {
  if (checkbox.checked === true) {
    //Open Parking
    document.querySelector("#fourWheelerOpenParking").style.display = "block";
    document.querySelector("#labelFourWheelerOpenParking").style.display =
      "block";

    //Private Parking
    document.querySelector("#fourWheelerPrivateParking").style.display =
      "block";
    document.querySelector("#labelFourPrivateParking").style.display = "block";
  } else {
    //Open Parking
    document.querySelector("#fourWheelerOpenParking").style.display = "none";
    document.querySelector("#labelFourWheelerOpenParking").style.display =
      "none";

    //Private Parking
    document.querySelector("#fourWheelerPrivateParking").style.display = "none";
    document.querySelector("#labelFourPrivateParking").style.display = "none";

    document.querySelector("#fourWheelerParkingCharges").style.display = "none";
  }
}

//Private Checked, Show Text box else Free
function fourWheelerHide() {
  document.querySelector("#fourWheelerParkingCharges").style.display = "none";
}

function fourWheelerShow() {
  document.querySelector("#fourWheelerParkingCharges").style.display = "block";
}

//Advance Maintenace Checked, Show Text box
function advanceCharges(checkbox) {
  if (checkbox.checked === true) {
    document.querySelector("#advancemaintenance").style.display = "block";
  } else {
    document.querySelector("#advancemaintenance").style.display = "none";
  }
}

//Calculations

function calculateAll() {

  //Input Validation

  //Flat Price input Validation
  let inputAmount = document.getElementById("flatprice").value;

  if(inputAmount === ""){
    document.querySelector("#emptyPrice").style.display = "block";
  }else{
    document.querySelector("#emptyPrice").style.display = "none";
  }

  //Stamp Duty Input Validation
  let stampDutyAmount = document.getElementById("stampduty").value;
  if(stampDutyAmount === ""){
    document.querySelector("#emptyStampDuty").style.display = "block";
  }else{
    document.querySelector("#emptyStampDuty").style.display = "none";
  }

  //Input Price
  inputAmount = parseInt(document.getElementById("flatprice").value);
  console.log("Input Flat Price:", inputAmount)

  //GST (if OC not Checked)
  let gstAmount = parseInt(document.getElementById("gstcharges").value);
  //Write the condition if the OC is checked
  console.log("GST on HTML:", gstAmount);

  //Registration charges
  let registrationAmount = parseInt(document.getElementById("registration").value);
  console.log("Registration Charges:", registrationAmount)

  // Stamp Duty
  stampDutyAmount = parseInt(document.getElementById("stampduty").value);
  console.log("Stamp Duty Amount:", stampDutyAmount);

  //Scanning Charges
    let scanningAmount = parseInt(document.getElementById("scanning").value);
    console.log("Scanning Charges:", scanningAmount)


  //Advance Maintenace Charges
  let advanceChargesAmount = document.getElementById("advancemaintenance").value;
  
  if(advanceChargesAmount === ""){
    advanceChargesAmount = 0;
  } else{
    advanceChargesAmount = parseInt(document.getElementById("advancemaintenance").value);
  }
  console.log("Advance:", advanceChargesAmount);

  let advanceCheck = document.getElementById("advancemaintenancecheck");
  if(advanceCheck.checked === true){
    advanceChargesAmount;
  }else{
    advanceChargesAmount = 0;
  }
  console.log("Hide Advance:", advanceChargesAmount)


  let totalUchecked = inputAmount + registrationAmount + stampDutyAmount + scanningAmount + advanceChargesAmount;

  console.log("Total Amount without GST & Parking:", totalUchecked)

  //Not to count if it's unchecked
  
  //GST
  let gstCheck = document.getElementById("oc");
  if(gstCheck.checked === true){
    gstAmount = 0;
  }else{
    gstAmount;
  }
  console.log("Hide GST:", gstAmount)
  console.log("Total with GST:", gstAmount + totalUchecked)

  //Parking
  let parkingCheck = document.getElementById("parking");
  let parkingTwoCheck = document.getElementById("twoWheelerParking")
  let parkingTwoPrivateCheck = document.getElementById("twoWheelerPrivateParking")

  let twoWheelerPrivateParkingAmount = parseInt(document.getElementById("twoWheelerParkingCharges").value);
  if(twoWheelerPrivateParkingAmount === NaN){
    twoWheelerPrivateParkingAmount = 0;
  }else{
    twoWheelerPrivateParkingAmount;
  }
  

  if(parkingCheck.checked && parkingTwoCheck.checked && parkingTwoPrivateCheck.checked){
    twoWheelerPrivateParkingAmount = twoWheelerPrivateParkingAmount;
  }else{
    twoWheelerPrivateParkingAmount = 0;
  }
  console.log("TwoParkcheck:", twoWheelerPrivateParkingAmount)

  

  let parkingFourCheck = document.getElementById("fourWheelerParking");
  let parkingFourParkingCheck = document.getElementById("fourWheelerPrivateParking");

  let fourWheelerPrivateParkingAmount = parseInt(document.getElementById("fourWheelerParkingCharges").value);

    if(fourWheelerPrivateParkingAmount === ""){
      fourWheelerPrivateParkingAmount = 0;
    }else{
      fourWheelerPrivateParkingAmount = fourWheelerPrivateParkingAmount;
    }

  if(parkingCheck.checked && parkingFourCheck.checked && parkingFourParkingCheck){
    fourWheelerPrivateParkingAmount;
  }else{
    fourWheelerPrivateParkingAmount = 0;
  }
  console.log("FourParkcheck:", fourWheelerPrivateParkingAmount)

  let totalParking = twoWheelerPrivateParkingAmount + fourWheelerPrivateParkingAmount;

  let grandTotal = totalUchecked + gstAmount + totalParking;
  console.log("Grand Total", grandTotal)
  
displayMessage(grandTotal);

}

function displayMessage(grandTotal){

let successMessage = document.querySelector(".alert");
successMessage.innerHTML = `"${grandTotal}" is the total flat price.`;

if(isNaN(grandTotal)){
  successMessage.style.display = "none";
}else{
  successMessage.style.display = "block";
}
}

