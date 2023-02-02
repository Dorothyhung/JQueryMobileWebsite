

document.addEventListener("DOMContentLoaded", function(event) {
    this.getElementById("addButton").addEventListener("click", function() {
        let num1 = parseFloat(document.getElementById("num1").value)
        let num2 = parseFloat(document.getElementById("num2").value)
        document.getElementById("answer").value = (num1+num2);
    })
    this.getElementById("subButton").addEventListener("click", function() {
        let sub1 = parseFloat(document.getElementById("sub1").value)
        let sub2 = parseFloat(document.getElementById("sub2").value)
        document.getElementById("answer2").value = (sub1-sub2);
    })
})
