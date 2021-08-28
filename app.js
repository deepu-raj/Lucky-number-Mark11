const doB = document.querySelector('input[type="date"]');
const luckyNum = document.querySelector("#input-num");
const checkBtn = document.querySelector("#check-btn");
const error = document.querySelector("#errorMsg");
error.innerText ="";



function calculateLuck () {
var dobInputValue = doB.value;// dd-mm-yyyy
var luckyNumValue = luckyNum.value
var numString = dobInputValue.replaceAll("-","");
    var sum=0;
     for (let digit of numString) {
         sum=sum + Number(digit);
     }
    var remainder = sum%luckyNumValue;
      if(remainder===0){
        error.innerText = "This number carries luck for you 😊"
      } else {
        error.innerText = "This number does not carry luck for you 🙄 "
      }
        
   }


checkBtn.addEventListener("click",calculateLuck);


