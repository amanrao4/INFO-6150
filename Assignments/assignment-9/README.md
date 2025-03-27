# React Job Portal – Assignment 9

This project is a React-based job portal developed as part of Assignment 9 for INFO-6150. It allows users to log in using credentials from a previously created Node.js/Express backend (Assignment 8) and explore job listings and company profiles.

The project demonstrates front-end routing, session management, API integration, and dynamic rendering using React, Axios, and Material UI.

---

##  Tech Stack

- React
- React Router DOM
- Axios
- Material UI (MUI)
- Node.js + Express (Assignment 8 API)
- MongoDB (backend only, used for login + image storage)

---

##  Features

###  Login with Backend Credentials
- Authenticates users using email and password stored in MongoDB (Assignment 8).
- Stores JWT token in localStorage.
- Implements session persistence and logout.

###  Page Routing with React Router
- Home Page
- About Page
- Job Listings Page
- Contact Page
- Company Showcase Page

###  Job Listings
- Displays a list of static job posts.
- Uses Material UI Cards and Grid layout.
- Includes title, description, last updated, and apply link.

###  Company Showcase (Image Gallery)
- Fetches user-uploaded images from backend API.
- Displays images and company names in a responsive gallery.
- Uses a local mapping to simulate company names (backend modification is restricted in this assignment).

### Material UI Integration
- All pages and components styled using MUI.
- Responsive Cards, Buttons, AppBar, Typography, and more.

---

##  Folder Structure

assignment9/ 
├── public/ 
├── src/ │ 
    ├── api/ # Axios instance for backend API │ 
    ├── components/ # Reusable components (Navbar) │ 
    ├── context/ # Auth context for session management │
    ├── pages/ # Home, About, Jobs, Contact, CompanyShowcase │ 
    ├── routes/ # AppRoutes.js for central routing │ 
    ├── App.js │ 
    ├── index.js 
├── .env 
├── package.json 
├── README.md


---

##  Setup Instructions

### 1. Clone the Repo

- Clone the repository.

### 2. Install Dependencies

- npm install

### 3. Environment variables 

- Create a .env file in the root of the directory
- REACT_APP_API_URL=http://localhost:5000

### 4. Run the app

- npm start
- The app launches at http://localhost:3000

### 5. Backend Requirements 

- Make sure the following are running in the background:
- 1. MongoDB (mongod or MongoDB Compass)
- 2. Assignment 8 Backend (run npm dev inside that project)
- The login and image gallery functionality depends on the backend API.

### 6. Screens and Components 

- Navbar with route links and logout
- Login Page with session handling
- Home Page with welcome text and navigation buttons
- Jobs Page with 6 sample jobs in Card layout
- Company Showcase with images pulled from backend
- About Page with project context
- Contact Page with basic form

### 7. Testing 

- Use Postman to upload user images to the backend.
- Use browser DevTools - network to confirm the API responses.
- Manually test page navigation and layout.

