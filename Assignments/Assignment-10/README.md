
# Assignment - 10: React Admin and Employee Portal with Redux and Material UI

## Project Overview

This project enhances the previous Job Portal application by introducing **Redux** for state management and adding distinct functionalities for Admin and Employee roles. The application supports restricted routing based on user types, implements admin functionalities for job postings, and provides employees with a jobs dashboard.

This assignment builds on Assignment 9, focusing on dynamic state management and role-based routing with React.

---

## New Features in Assignment 10

### 1. **State Management with Redux**
- Utilizes Redux to manage global state across the application.
- Centralizes state for users, jobs, and authentication.

### 2. **Admin Functionalities**
- **Admin Page**: Displays a list of users in a table format (excluding passwords).
- **"Add Jobs" Page**: Allows admins to create job postings with fields such as company name, job title, description, and salary.

### 3. **Employee Functionalities**
- **"Jobs" Page**: Displays available jobs posted by admins, retrieved from the backend.

### 4. **Role-Based Routing**
- Admin users have access to admin-specific pages, including the "Employees" and "Add Jobs" pages.
- Employee users can access the "Jobs" page and other functionalities from Assignment 9.

### 5. **Improved API Endpoints**
- **POST `/user/create`**: Includes a `type` field with values `employee` or `admin`.
- **GET `/users`**: Fetches all users excluding passwords.
- **POST `/create/job`**: Allows admins to create job postings.
- **GET `/jobs`**: Retrieves job listings for employees.

### 6. **Enhanced User Experience**
- Added a spinner/loading indicator during API calls for better UX.
- Optionally includes pagination for job listings.

---

## Project Structure

```
project-root
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── About
│   │   │   ├── CompanyShowcase
│   │   │   ├── Contact
│   │   │   ├── Employees
│   │   │   ├── Home
│   │   │   ├── Job
│   │   │   ├── JobListings
│   │   │   ├── Login
│   │   │   ├── Logout
│   │   │   ├── Navbar
│   │   │   ├── Register
│   │   │   ├── ProtectedRoute.jsx
│   │   ├── redux
│   │   │   ├── slices
│   │   │   ├── store.js
│   │   ├── App.js
│   │   ├── index.js
├── server
    ├── controllers
    │   ├── authController.js
    │   ├── jobController.js
    │   ├── userController.js
    ├── models
    │   ├── Company.js
    │   ├── Job.js
    │   ├── User.js
    ├── routes
    ├── services
```

---

## Previous Endpoints from Assignment 9

- **Auth Endpoints**
  - **`/auth/login`**: Handles user login using credentials stored in the backend.
  - **`/auth/logout`**: Ends the user session.

- **Company Endpoints**
  - **`/companies`**: Retrieves a list of companies for the Company Showcase page.
  - **`/company_images/image_name.png`**: Serves company images for the image gallery on the frontend.

- **Job Endpoints**
  - **`/jobs`**: Lists job postings available on the platform.

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Install Dependencies**
   ```bash
   # For client
   cd client
   npm install

   # For server
   cd ../server
   npm install
   ```

3. **Run the Server**
   ```bash
   # Navigate to the server directory
   npm start
   ```

4. **Run the Client**
   ```bash
   # Open a new terminal and navigate to the client directory
   npm start
   ```

5. **Test the Application**
   - Log in using admin or employee credentials to test restricted routing and functionality.

---

## Technical Requirements

- **State Management**: Redux for managing user types and job data.
- **Material UI**: Used for tables, forms, and navigation components.
- **Routing**: React Router for role-based navigation.

---