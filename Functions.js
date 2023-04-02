function plusFunction() {
    var x = document.getElementById("Num1").value;
    var y = document.getElementById("Num2").value;
    z = x + y;
    document.getElementById("results").innerHTML = "The sum of " + x + " and " + y +" equals " + z;
}

function minusFunction() {
    var x = document.getElementById("Num1").value;
    var y = document.getElementById("Num2").value;
    let z = x - y;
    document.getElementById("results").innerHTML = "The difference of " + x + " and " + y +" equals " + z;
}

function multiplyFunction() {
    var x = document.getElementById("Num1").value;
    var y = document.getElementById("Num2").value;
    let z = x * y;
    document.getElementById("results").innerHTML = "The product of " + x + " and " + y +" equals " + z;
}

function divideFunction() {
    var x = document.getElementById("Num1").value;
    var y = document.getElementById("Num2").value;
    let z = x / y;
    document.getElementById("results").innerHTML = "The quotient of " + x + " and " + y +" equals " + z;
}

function modulusFunction() {
    var x = document.getElementById("Num1").value;
    var y = document.getElementById("Num2").value;
    let z = x % y;
    document.getElementById("results").innerHTML = "The remainder of " + x + " and " + y +" equals " + z;
}