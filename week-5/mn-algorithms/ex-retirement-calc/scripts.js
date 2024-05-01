/**
 * Retirement calculator
 *  Create a program that determines how many years you have left 
 *  until retirement and the year you can retire. 
 *  It should prompt for your current age 
 *  and the age you want to retire and display the output as shown 
 *  in the example that follows on the next slide.
 */


function getBirthdate() { 
    let age = 0;
    let retirementAge = 0;
    let isInputValid = false;

    while(isInputValid == false){
        age = prompt("What is your age?");

        if (checkAge(age)) {
            isInputValid = true;
        } 
    }
        
    isInputValid = false;
    while (isInputValid == false) {
        retirementAge = prompt("At what age would you like to retire?");
        if (checkRetireAge(retirementAge)) {
            isInputValid = true;
        } 
    }
       

    showRetirement(input);
}

function showRetirement(input) {
    let leftYears = Number(retirementAge) - Number(age);
    let date = new Date();
    let todayYear = date.getFullYear();
    let retireYear = todayYear + leftYears;
    let msg = `You have ${leftYears} years left until you can retire.\nIt's ${todayYear}, so you can retire in ${retireYear}.` 
    
    alert(msg);
    console.log(msg);
}


function isNumeric(value) {
    return !isNaN(value);
}

function checkAge(age) {
    return isNumeric(age) && (age >= 0 && age <= 120); 
}

function checkRetireAge(age) {
    return isNumeric(age) && (age >= 50 && age <= 80); 
}

