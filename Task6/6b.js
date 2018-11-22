function showIt() {
    document.getElementById("div1").style.visibility = "visible";
}
setTimeout("showIt()", 5000); // after 1 sec

function showIt2() {
    document.getElementById("div2").style.visibility = "visible";
}
setTimeout("showIt2()", 10000); // after 5 secs