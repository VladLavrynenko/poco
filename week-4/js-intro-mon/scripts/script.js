let _name = "";

function getSubmit() {
    alert(_name);

    _name = document.getElementById("name").value;
    // debugger;
    // console.error(_name);
    sayHello();
}


function sayHello() {
    document.getElementById("title").innerText = _name;
}