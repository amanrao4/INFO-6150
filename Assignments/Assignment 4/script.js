document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("emailId");
    const phone = document.getElementById("phoneNumber");
    const zip = document.getElementById("zipcode");
    const comments = document.getElementById("comments");
    const submitBtn = document.querySelector("input[type='Submit']");
    const address2 = document.getElementById("address2");
    const charCountDisplay = document.getElementById("charCount");
    const maxChars = 100;

    // Regular Expressions
    const regExFirstName = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    const regExLastName = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    const regExEmail = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;  
    const regExPhone = /^\(\d{3}\) \d{3}-\d{4}$/;  
    const regExZip = /^\d{5}(?:[-\s]\d{4})?$/;  

    // Function to validate fields
    function validateField(input, regex, errorMsg) {
        let value = input.value.trim();
        let errorSpan = input.nextElementSibling;

        if (!errorSpan || errorSpan.tagName !== "SPAN") {
            errorSpan = document.createElement("span");
            errorSpan.style.color = "red";
            input.parentNode.insertBefore(errorSpan, input.nextSibling);
        }

        if (!value) {
            errorSpan.textContent = "This field is required.";
            return false;
        } else if (!regex.test(value)) {
            errorSpan.textContent = errorMsg;
            return false;
        } else {
            errorSpan.textContent = "";
            return true;
        }
    }

    // Event Listeners for Validation
    firstName.addEventListener("input", () => validateField(firstName, regExFirstName, "Only letters allowed."));
    lastName.addEventListener("input", () => validateField(lastName, regExLastName, "Only letters allowed."));
    email.addEventListener("input", () => validateField(email, regExEmail, "Must be a @northeastern.edu email."));
    phone.addEventListener("input", formatPhone);
    zip.addEventListener("input", () => validateField(zip, regExZip, "Enter a valid ZIP code."));
    comments.addEventListener("input", () => validateField(comments, /.+/, "Comments are required."));
    address2.addEventListener("input", function() {
        let currentLength = address2.value.length;
        if(currentLength > maxChars){
            address2.value = address2.value.substring(0,maxChars);
            currentLength = maxChars;
        }

        charCountDisplay.textContent = `${currentLength}/${maxChars} characters used`;

    })

    // Function to format phone input (XXX) XXX-XXXX
    function formatPhone() {
        let value = phone.value.replace(/\D/g, "");
        if (value.length > 6) {
            phone.value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        } else if (value.length > 3) {
            phone.value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else if (value.length > 0) {
            phone.value = `(${value}`;
        }
    }

    // Enable submit button only when all fields are valid
    function checkFormValidity() {
        if (
            validateField(firstName, regExFirstName, "Only letters allowed.") &&
            validateField(lastName, regExLastName, "Only letters allowed.") &&
            validateField(email, regExEmail, "Must be a @northeastern.edu email.") &&
            validateField(phone, regExPhone, "Invalid phone format. Use (XXX) XXX-XXXX.") &&
            validateField(zip, regExZip, "Enter a valid ZIP code.") &&
            validateField(comments, /.+/, "Comments are required.")
        ) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    // Listen to changes on fields
    document.querySelectorAll("input, textarea").forEach(input => {
        input.addEventListener("input", checkFormValidity);
    });

    //Form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        addToTable();
        form.reset(); 
        checkFormValidity(); 
    });

//Dynamic table
const sourceSelect = document.getElementById("sourceSelect");
const dynamicCheckboxDiv = document.getElementById("dynamicCheckbox");

sourceSelect.addEventListener("change", function () {
    dynamicCheckboxDiv.innerHTML = ""; // Clear previous checkbox

    if (this.value) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "extraInfo";
        checkbox.addEventListener("change", toggleTextField);
        
        const label = document.createElement("label");
        label.htmlFor = "extraInfo";
        label.textContent = " Provide more details";

        dynamicCheckboxDiv.appendChild(checkbox);
        dynamicCheckboxDiv.appendChild(label);
    }
});

function toggleTextField() {
    let textField = document.getElementById("extraDetails");

    if (this.checked) {
        textField = document.createElement("input");
        textField.type = "text";
        textField.id = "extraDetails";
        textField.placeholder = "Enter details...";
        dynamicCheckboxDiv.appendChild(textField);
    } else if (textField) {
        textField.remove();
    }
}

function addToTable() {
    const tableBody = document.querySelector("#resultsTable tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${document.getElementById("firstName").value}</td>
        <td>${document.getElementById("lastName").value}</td>
        <td>${document.getElementById("emailId").value}</td>
        <td>${document.getElementById("phoneNumber").value}</td>
        <td>${document.getElementById("zipcode").value}</td>
        <td>${document.getElementById("comments").value}</td>
        <td>${document.getElementById("address2").value}</td>
    `;

    tableBody.appendChild(newRow);
}
});
