# Assignment 3 - Table Checklist 

## Project Description 
This project is a table checklist that is built using HTML and CSS.It allows users to dynamically manipulate a table containing student records, including adding, editing, deleting, and expanding/collapsing rows. The project demonstrates core JavaScript DOM manipulation techniques to create an interactive and user-friendly interface.

## Project Structure 
- **HTML Elements** - Defines the structure of the webpage, including a table for student records, buttons for interaction, and modals for editing data.
- **CSS** - Styles the table, buttons, and modal popups to enhance user experience and responsiveness.
- **JavaScript** - Implements all interactive features such as row addition, deletion, editing, and toggling row visibility.

## Features

1. **Add New Student**:
- Users can add a new student record dynamically.
- Each row contains student details including ID, name, course, and status.
- The newly added row includes a Delete button and an Edit button

2. **Delete Student**:
- Clicking the Delete button removes the respective student row from the table.
- A confirmation prompt ensures the user wants to delete the record.

3. **Edit Student**:
- An Edit button is dynamically added in an Edit Column for each student.
- Clicking Edit opens a popup modal displaying student details as text (non-editable).
- The modal contains Update and Cancel buttons:
- Update: Displays an alert confirming that student data has been updated.
- Cancel: Closes the modal without making any changes.

4. **Expand/Collapse Rows**:
- A green arrow in each row allows users to expand or collapse additional details.
- Clicking the arrow toggles the visibility of additional information.

## Git and Submission
- The project has been pushed to a GitHub repository.
- Submission includes both a ZIP file containing all project files and a link to the GitHub repository.


## How to Run
1. Clone the repository from GitHub.
2. Ensure all files are in the correct directory structure.
3. Open `table.html` in your browser to view the website.
4. Test responsiveness by resizing the browser window or viewing on different devices.
