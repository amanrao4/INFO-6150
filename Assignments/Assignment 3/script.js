//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}
window.onload = function(){
  document.getElementById("userInfo").innerText = "Aman Rao - NUID: 001234567";

  //Submit disabled
  document.getElementById("button").disabled = true;
  document.getElementById("button").style.backgroundColor = "gray";

  //Collapsed table
  let details = document.querySelectorAll(".dropDownTextArea");
  details.forEach(row =>  row.style.display = "none");

}
//Adding rows and tables dynamically for new student
document.getElementById("add").addEventListener("click", function () {
  let table = document.getElementById("myTable");
  let rows = table.getElementsByTagName("tr");

  // Count the existing student rows (ignoring headers and detail rows)
  let studentRows = document.querySelectorAll("#myTable tr:not(.dropDownTextArea)");
  let studentCount = (studentRows.length - 1) + 1; // Subtracting 1 to ignore header row

  let newRow = table.insertRow();
  newRow.innerHTML = `
      <td><input type="checkbox"><br><br><img src="down.png" width="25px" class="toggleRow"></td>
      <td>Student ${studentCount}</td>
      <td>Teacher ${studentCount}</td>
      <td>Approved</td>
      <td>Fall</td>
      <td>TA</td>
      <td>12345</td>
      <td>100%</td>
      <td></td>
  `;

  // Create associated hidden detail row
  let detailRow = table.insertRow();
  detailRow.classList.add("dropDownTextArea");
  detailRow.innerHTML = `<td colspan="8">Details for Student ${studentCount}</td>`;
  detailRow.style.display = "none";

  // Show success alert after successful addition
  alert(`Student ${studentCount} Record added successfully`);
});

document.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
      let row = event.target.closest("tr");

      if (event.target.checked) {
          row.style.backgroundColor = "yellow";
          document.getElementById("button").disabled = false;
          document.getElementById("button").style.backgroundColor = "orange";

          // Add Edit and Delete buttons if not present
          if (!row.querySelector(".deleteBtn")) {
              let deleteBtn = document.createElement("button");
              deleteBtn.innerText = "Delete";
              deleteBtn.classList.add("deleteBtn");
              deleteBtn.onclick = deleteStudent;
              row.cells[8].appendChild(deleteBtn);
          }

          if (!row.querySelector(".editBtn")) {
            // Check if Edit column already exists
            if (row.cells.length < 10) {
                let editCell = row.insertCell(9); // Insert new column at index 9
                editCell.classList.add("editColumn"); 
            }
            
            let editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("editBtn");
            editBtn.onclick = editStudent;
            
            row.cells[9].appendChild(editBtn); 
        }
      } else {
          row.style.backgroundColor = "white";

          // Remove Edit and Delete buttons
          let deleteBtn = row.querySelector(".deleteBtn");
          let editBtn = row.querySelector(".editBtn");

          if (deleteBtn) deleteBtn.remove();
          if (editBtn) editBtn.remove();

          // Disable submit if no checkboxes are checked
          if (document.querySelectorAll("input[type='checkbox']:checked").length === 0) {
              document.getElementById("button").disabled = true;
              document.getElementById("button").style.backgroundColor = "gray";
          }
      }
  }
});


function deleteStudent(event) {
  let row = event.target.closest("tr");
  let studentName = row.cells[1].innerText;
  
  row.nextElementSibling.remove(); // Remove details row
  row.remove();

  alert(`${studentName} Record deleted successfully`);

  // Renumber remaining students
  let rows = document.querySelectorAll("#myTable tr:not(.dropDownTextArea)");
  let studentNumber = 1;
  rows.forEach((row, index) => {
      if (index > 0) {  // Skip header row
          row.cells[1].innerText = `Student ${studentNumber}`;
          row.cells[2].innerText = `Teacher ${studentNumber}`;
          studentNumber++;
      }
  });
}

function editStudent(event) {
  let row = event.target.closest("tr"); 
  let studentNumber = row.cells[1].innerText; // Get Student X
  let advisor = row.cells[2].innerText;
  let awardStatus = row.cells[3].innerText;
  let semester = row.cells[4].innerText;
  let type = row.cells[5].innerText;
  let budget = row.cells[6].innerText;
  let percentage = row.cells[7].innerText;

  // Create pop-up structure
  let popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "white";
  popup.style.padding = "20px";
  popup.style.border = "2px solid black";
  popup.style.zIndex = "1000";

  // Pop-up title
  let title = document.createElement("h3");
  title.innerText = `Edit details of ${studentNumber}`;
  popup.appendChild(title);

  // Display student details (non-editable text)
  let details = `
      <p><strong>Student:</strong> ${studentNumber}</p>
      <p><strong>Advisor:</strong> ${advisor}</p>
      <p><strong>Award Status:</strong> ${awardStatus}</p>
      <p><strong>Semester:</strong> ${semester}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Budget #:</strong> ${budget}</p>
      <p><strong>Percentage:</strong> ${percentage}</p>
  `;
  let detailsContainer = document.createElement("div");
  detailsContainer.innerHTML = details;
  popup.appendChild(detailsContainer);

  // Create buttons
  let updateBtn = document.createElement("button");
  updateBtn.innerText = "Update";
  updateBtn.style.marginRight = "10px";
  updateBtn.onclick = function () {
      alert(`${studentNumber} data updated successfully`);
      document.body.removeChild(popup);
  };

  let cancelBtn = document.createElement("button");
  cancelBtn.innerText = "Cancel";
  cancelBtn.onclick = function () {
      document.body.removeChild(popup);
  };

  popup.appendChild(updateBtn);
  popup.appendChild(cancelBtn);

  // Append pop-up to body
  document.body.appendChild(popup);
}

document.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG" && event.target.getAttribute("src") === "down.png") {
      let row = event.target.closest("tr");
      let nextRow = row.nextElementSibling;

      if (nextRow && nextRow.classList.contains("dropDownTextArea")) {
          if (nextRow.style.display === "none" || nextRow.style.display === "") {
              nextRow.style.display = "table-row"; 
          } else {
              nextRow.style.display = "none";
              event.target.setAttribute("src", "down.png"); // Revert arrow
          }
      }
  }
});




Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");