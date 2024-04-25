
function sayHello() {
    let userName = "";

    while(userName != "q") {
        userName = prompt("Enter your name, SVP. (q - to quit)");      
        let msg = `Hey ${userName}`;
        alert(msg);
    }
}


sayHello();