function colorChange() {
                        document.body.style.backgroundColor = "black"
                    }
function uncolorChange() {
    document.body.style.backgroundColor = "white"
}
function jstester() {
    const truePassword = "Sword33"
    const input = document.getElementById("password").value
    if (input == truePassword) {
        window.location.href="linked.html"
    } else {
            alert("Incorrect Password")
            document.getElementById("password").value = ""
    }
}
function writesomething() {
    alert("awaiting implementation")
}