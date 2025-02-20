# Login and Calculator Web Application

## Overview
This project is a simple web-based application that includes:
- A **Login Page** with input validation for email, username, and password.
- A **Calculator Page** that allows users to perform basic arithmetic operations.
- Real-time form validation with error highlighting using **jQuery**.
- A modern and responsive UI styled with **CSS**.

## Technologies Used
- **HTML5** for structure
- **CSS3** for styling
- **JavaScript (jQuery)** for dynamic validation and calculations

---

## Features
### **Login Page (`index.html`)**
- Users must enter a **Northeastern email** (e.g., `@northeastern.edu`).
- Username can only contain **letters** and be between **3-20 characters**.
- Password must be **6-20 characters long**.
- Password confirmation must **match** the entered password.
- If any validation fails, the input box turns **red**, and an error message appears.
- **Login button is disabled** until all fields are valid.
- After successful login, the username is stored in **localStorage**, and the user is redirected to the **Calculator Page**.

### **Calculator Page (`calculator.html`)**
- Displays a **personalized greeting** using the stored username.
- Allows users to enter **two numbers** and perform **addition, subtraction, multiplication, and division**.
- Input validation ensures only valid numbers are accepted.
- If invalid input is detected, the input box turns **red**, and an error message appears.
- Displays the **calculated result** in a read-only input field.

---