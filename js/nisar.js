//-----hello world-----


function myFunction() {
    let x = ["king", "nallavan", "makri", "kazhutha", "janthu", "pottan", "thendi", "paavam", "great", "good", "marathalayan", "hard-worker", "unda-meru", "mannunni"];
    let y = x[Math.floor(Math.random() * x.length)];
    let z =document.getElementById("textbox");
    let w = ["saleel", "anand","nihala","nihara","favas","neeraj","swathi","rahna"]

    if (z.value == "" || w.indexOf(z.value) == -1) {
        document.getElementById("paragraph").innerHTML = "";
        alert("please make sure the entered person is from your class");
        console.log("if")
    } else {
        console.log("else")
        document.getElementById("paragraph").innerHTML = y;
        document.getElementById("btn").innerHTML = "clear";
        document.getElementById("btn-down").style.display = "none";
        z.disabled = true;
        z.value = null;
    }
}
function mySecondFunction() {
    document.getElementById("paragraph").innerHTML = "";
    document.getElementById("textbox").value = "";
    document.getElementById("btn").innerHTML = "do it";
    document.getElementById("btn-down").style.display = "block";
    document.getElementById("textbox").disabled = false;
}


