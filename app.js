document.addEventListener("DOMContentLoaded", function() {

  document
  	.getElementById("payment-form")
  	.addEventListener("submit", function(event){
  		event.preventDefault();

  		//Assign variables for first and last name
  		var firstName = document
  			.getElementById("firstname")
  			.value;

  		var lastName = document
  			.getElementById("lastname")
  			.value;

  		//Check to make sure first and last name are not blank
  		if (firstName === "" || lastName ==="") {
  			alert("Please enter a first and last name!");
  			return;
  		}

      //Step 1: Use .length to check that CC number is 16 digits
      //Step 2: Convert string from form into number using parseInt
      //step 3: Use isNaN to check if the resulting number is a number

      var cc = document
        .getElementById("credit-card")
        .value;

      if (cc.length !== 16) {
        alert ("Please enter 16 digits for credit card number");
        return;
      }

      var ccNum = parseInt(cc);

      if (isNan(ccNum)) {
          alert("please enter only numbers for credit card");
          return;
      }

      var exp=document 
        .getElementById("expiration")
        .value;

      if (exp =="") {
        alert("please enter expiraton date")
        return;
      }
      if (isNaN(exp)) {
          alert("Please enter only numbers for expiration date")
          return;
      }
      if (cv ==="") {
        alert ("Please enter only numbers for CV Codes")
        return;
      }    
       
      
  	});

});