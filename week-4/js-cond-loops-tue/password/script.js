// Password
// - Check if valid password
// - Generate valid password

// Minimum constraints:
// 4 minimum length
// 1 smallcase
// 1 uppercase
// 1 special

let input = prompt("Enter your password.");

function checkPassword(_password) {
    const password = _password;
    let constraints = [false,false,false,false]; 

    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    const isUpperCase = str => str === str.toUpperCase();
    const isLowerCase = str => str === str.toLowerCase();

    if(password.length >= 4){
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

checkPassword(input);