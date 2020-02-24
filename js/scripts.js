"use strict";
const theForm = document.getElementById("the-form");
const theDate = document.getElementById("date");
//use quesry selector to reference css tags. This code will reference any input text types.
const datePicker = document.querySelector('input[type="date"]');
const template = theDate.innerText;


function showDate(){
  const d = new Date(datePicker.value);
  //call the buildate function to store date in human readable format
  buildDate(d);
};
//take date as parameter and add it to the h1 tag innerText
function buildDate(d) {
  theDate.innerText = `${template} ${d.toDateString()}`
};

//listen for change event and call the funtion showDate
datePicker.addEventListener('change', showDate);
//pre populate h1 tag with todays date
buildDate(new Date());


//Task 3
const colour = document.getElementById("colour");
const theValue = document.getElementById("the-value");

function setColor(){
  //change the background color of the value to the selected color
  theValue.style.backgroundColor = colour.value
};

theForm.addEventListener("input", setColor);


//Task 4
const range = document.querySelector('input[type="range"]');
function rangeAction(){
  theValue.innerText = range.value;
  theValue.style.width = `${range.value}%`
}
range.addEventListener("input", rangeAction);
