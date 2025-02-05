# Assignment 4 - Form Validation and Dynamic UI  

## Project Description  
This project is a dynamic and interactive form validation system built using **HTML, CSS, and JavaScript**. It includes real-time form validation, dynamic UI updates, and form submission handling. The project showcases JavaScript **event listeners**, **regular expressions (regex)**, and **DOM manipulation techniques** to ensure a smooth user experience.

## Project Structure  
- **HTML Elements** - Defines the structure of the form, including input fields, radio buttons, checkboxes, a select dropdown, and a dynamically generated table for submitted data.  
- **CSS** - Styles the form elements, error messages, and validation highlights to enhance user experience.  
- **JavaScript** - Implements form validation, live character counters, dynamic field additions, and real-time UI updates based on user input.  

## Features  

### **1. Form Validation (Live Validation)**
- **Validates on key events**, ensuring errors are shown immediately.  
- Uses **regular expressions (regex)** to validate:
  - Email (**@northeastern.edu** domain restriction).  
  - Phone number (**(XXX) XXX-XXXX** format with input masking).  
  - Zip code (**numeric with optional hyphenated extension**).  
- Enforces **min/max length constraints** for inputs.  
- Prevents special characters in alphanumeric fields.  
- Displays **error messages in red** that disappear once corrected.  

### **2. Submit Button Enable/Disable**
- The submit button remains disabled until all validations are passed.  
- Updates dynamically when errors are corrected.  

### **3. Dynamic UI Updates**
- **Live Character Counter**  
  - The Address 2 field has a **real-time character counter** with a max of **100 characters**.  
  - Turns red when **90% of the limit** is reached.  

- **Dynamic Checkbox and Input Field**  
  - A dropdown selection dynamically generates a **checkbox** below it.  
  - Checking the checkbox reveals a **mandatory input field** for additional details.  
  - Unchecking the checkbox removes the input field.  

### **4. Form Submission and Data Table**
- On submitting the form:  
  - **A table is generated below the form** displaying all submitted data.  
  - **Previous submissions are retained**, appending new entries.  
  - The form fields **clear out automatically** after submission.  
  - If **Address 2 is empty**, the table displays it as blank.  

## Git and Submission  
- The project is pushed to a **private GitHub repository**.  
- Submission includes:  
  - A **ZIP file** containing all project files.  
  - A **GitHub repository link** provided in the Canvas remarks.  

## How to Run  
1. Clone the repository from GitHub.  
2. Open `Form.html` in your browser.  
3. Fill in the form, test live validations, and submit the data.  
4. Observe the dynamic updates in the UI.  

