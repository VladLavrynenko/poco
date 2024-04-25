// Password
// - Check if valid password
// - Generate valid password

// Minimum constraints:
// 4 minimum length
// 1 smallcase
// 1 uppercase
// 1 special


// BEGIN
// let input = prompt("Enter your password.");

function checkPassword(_password) {
    const password = _password;
    let constraints = [false,false,false,false]; 

    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    const isUpperCase = str => str === str.toUpperCase();
    const isLowerCase = str => str === str.toLowerCase();
    
    console.log("length: " + password.toString());

    if(password.length >= 4) {
        constraints[0] = true;
    }


    for (const iterator of password) {
        if(isUpperCase(iterator)) {
            constraints[1] = true;
        }

        if(isLowerCase(iterator)) {
            constraints[2] = true;
        }

        if(specialCharacters.test(password)) {
            constraints[3] = true;
        }
    }

     

    if (constraints.every((element) => element === true)) {
        alert("All constraints are satisfied.");
    } else {
        alert("Some constraints are not satisfied.");
    }

    console.log(password)
    console.log(constraints.toString())
}

// checkPassword(input);








//Generate valid password 
//The same constraints:
// 4 minimum length
// 1 smallcase (97-122)
// 1 uppercase (65-90)
// 1 special (33-64)
// //
// How to generate it:
// - any length >= 4
// - any order 
// - any symbols 

function generatePassword(){
    let password = "";
    let constraints = [false,false,false,false]; 

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    function generateRandomNumberWithDigits(digitNumber) {
        var min = Math.pow(10, digitNumber- 1);
        var max = Math.pow(10, digitNumber) - 1;
        return getRndInteger(min, max);
      }


      function makeDigitSmallCaseLetter() {
        let randomLetterNumber = getRndInteger(97, 122);
        return String.fromCharCode(randomLetterNumber);
      }

      
      function makeDigitUpperCaseLetter() {
        let randomLetterNumber = getRndInteger(65, 90);
        return String.fromCharCode(randomLetterNumber);
      }

      function makeDigitSymbol() {
        let randomSymbolNumber = getRndInteger(33,64);
        return String.fromCharCode(randomSymbolNumber);
      }


    // function countDigits(number) {
    //     var numStr = number.toString();
    //     return numStr.length;
    // }

    const paswordLength = getRndInteger(4, 10); 
    let randomNumber = generateRandomNumberWithDigits(paswordLength);
    constraints[0] = true;
    console.log(randomNumber);

    console.log(paswordLength);

    password = randomNumber.toString();
      password = makeDigitSmallCaseLetter() + password.substring(1);
      password = password.substring(0, 1) + makeDigitUpperCaseLetter() + password.substring(2);
      password = password.substring(0, 2) + makeDigitSymbol() + password.substring(3);

    console.log("password: " + password);
    return password;
}


let password = generatePassword();
console.log(checkPassword(password));
