function myFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = "You must write Email Address";
        document.getElementById("id1").style.borderColor = "red";

    } else {
        document.getElementById("demo").innerHTML = "Input Succeed";
    }
} 