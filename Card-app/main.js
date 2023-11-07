let cardHolderName = document.querySelector('#cardHolderName');
let cardHolderNumber = document.querySelector('#cardHolderNumber');
let cardMonth = document.querySelector('#month');
let cardYear = document.querySelector('#year');
let backSideCode = document.querySelector('#backsideCode');

let cardHolder = document.querySelector('#cardHolder');
let cardNumber = document.querySelector('#cardNumber');
let cardMonthDisplayer = document.querySelector('#monthDisplayer');
let cardYearDisplayer = document.querySelector('#yearDisplayer');
let backSideCodeDisplayer = document.querySelector('#backSideCodeDisplayer');



cardHolderName.addEventListener('input', () => {
  let holderName = cardHolderName.value;
   
  if(holderName === ""){
    cardHolder.innerHTML = "user name";
  }
  else{
    cardHolder.innerHTML = holderName;
  }
});

cardHolderNumber.addEventListener('input', () => {
  let holderNumber = cardHolderNumber.value;
   
  if(holderNumber === ""){
    cardNumber.innerHTML = "0000 0000 0000 0000";
  }
  else{
    cardNumber.innerHTML = holderNumber;
  }
});


cardMonth.addEventListener('input', () => {
  let month = cardMonth.value;

  if(month === ""){
    cardMonthDisplayer.innerHTML = "00";
  }
  else{
    cardMonthDisplayer.innerHTML = month;
  }
});

cardYear.addEventListener('input', () => {
  let year = cardYear.value;

  if(year === ""){
    cardYearDisplayer.innerHTML = "00";
  }
  else{
    cardYearDisplayer.innerHTML = year;
  }
});


backSideCode.addEventListener('input', () => {
  let backCode = backSideCode.value;

  if(backCode === ""){
    backSideCodeDisplayer.innerHTML = "000";
  }
  else{
    backSideCodeDisplayer.innerHTML = backCode;
  }
});