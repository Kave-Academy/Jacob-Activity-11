function run() {
    var myObj = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12}

    var size = Object.keys(myObj).length;

    document.getElementById("output").innerHTML = size;
}
