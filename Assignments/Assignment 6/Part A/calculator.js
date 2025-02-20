$(document).ready(function () {
    $("#displayUsername").text(localStorage.getItem("username"));

    function validateNumber(input) {
        return /^-?\d+(\.\d+)?$/.test(input);
    }

    function calculate(operation) {
        let num1 = $("#num1").val().trim();
        let num2 = $("#num2").val().trim();
        let result = 0;
        let valid = true;

        if (!validateNumber(num1)) {
            $("#num1Error").text("Please enter a valid number.");
            valid = false;
        } else {
            $("#num1Error").text("");
        }

        if (!validateNumber(num2)) {
            $("#num2Error").text("Please enter a valid number.");
            valid = false;
        } else {
            $("#num2Error").text("");
        }

        if (!valid) return;

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        const operations = (op) => ({
            add: num1 + num2,
            subtract: num1 - num2,
            multiply: num1 * num2,
            divide: num2 !== 0 ? num1 / num2 : "Cannot divide by zero"
        })[op];

        result = operations(operation);
        $("#result").val(result);
    }

    $("#add").click(() => calculate("add"));
    $("#subtract").click(() => calculate("subtract"));
    $("#multiply").click(() => calculate("multiply"));
    $("#divide").click(() => calculate("divide"));
});
