function myData() {
    data = ""
    for (i = 0; i < 10; i++)
        data += "Hello<br>"
    document.getElementById("lblMessage").innerHTML = data
}