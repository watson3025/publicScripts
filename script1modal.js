;(function($, undefined) {
"use strict";

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
     
// Get the modal
var modal = document.getElementById('myForm');

     
var button = document.getElementById("open-button");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/*btn.onclick = function() {
  modal.style.display = "block";
}*/

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

     // added code
var currentTab = 0; // Current tabx is set to be the first tabx (0)
showTab(currentTab); // Display the current tabx

function showTab(n) {
  // This function will display the specified tabx of the form...
  var x = document.getElementsByClassName("tabx");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {   //put 6 to show on the last tabx. this because something is messing up the javascript
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tabx to display
  var x = document.getElementsByClassName("tabx");
  // Exit the function if any field in the current tabx is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tabx:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tabx by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tabx:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var z, x, y, i, valid = true;
  x = document.getElementsByClassName("tabx");
  y = x[currentTab].getElementsByTagName("input");
  z = x[currentTab].getElementsByTagName("textarea");
  // A loop that checks every input field in the current tabx:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
    
  }
  // A loop that checks every textarea field in the current tabx:
  for (i = 0; i < z.length; i++) {
    // If a field is empty...
    if (z[i].value == "") {
      // add an "invalid" class to the field:
      z[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
   }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
     
     //when the user  clicks anywhere for modal to dissapear  
     window.onclick = function(event) {
         if (event.target == modal){
             modal.style.display = "none";
         }
     }
