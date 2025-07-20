📺 Netflix Login Clone — 
This project is a login page that closely replicates the Netflix login experience, built using React for the frontend and Node.js with Express for the backend API server. It demonstrates a typical authentication flow with form validation, mock credential checking, API communication, and conditional UI behavior including error handling and redirect on success.
live:https://netflix-login-kappa-ten.vercel.app/
![Uploading image.png…]()


📝 Project Overview
The main goal of this assignment is to implement a seamless login system mimicking Netflix’s clean and minimalist design, combining a modern frontend UI with a backend that validates user credentials.

Why this project?
*To practice building full-stack web applications using popular technologies.

*To learn React fundamentals including form handling, state, validation, and routing.

*To understand how to set up a simple Express API and handle HTTP requests.

*To practice frontend-backend integration through API calls (using Axios or Fetch).

*To get familiar with using Tailwind CSS for building responsive and visually appealing UI components.

*To grasp the basics of authentication flow even though this example uses mock data (no database).

🎯 Key Features
Feature	Description
*Frontend Framework	React app created with Vite or Create React App for fast dev.
*Login UI	Netflix-inspired clean login page with email and password fields.
*Form Handling	Controlled input components to capture and manage user data.
*Validation	Simple frontend validation that prevents submission of empty inputs and displays inline error messages.
*Backend API	Express server exposing a /login endpoint accepting POST requests with credentials.
*Mock Authentication	Server-side validation of user input against hardcoded credentials without a database.
*API Integration	Frontend sends login data to backend using Axios (or Fetch) and handles responses.
*Error Handling	User-friendly error messages shown on invalid login attempts.
*Success Handling	On successful login, frontend redirects users to a protected dummy 'Dashboard' page.
*Responsive Styling	Tailwind CSS ensures the UI works well on various screen sizes and devices.

🧩 Detailed Architecture
*Frontend
*Built using React functional components with hooks (useState, useEffect).

*Uses Tailwind CSS for styling, replicating Netflix’s dark, minimalist aesthetic.

*Form includes controlled inputs for email and password.

*Validation logic prevents submission if fields are empty and shows contextual error messages.

*Upon submission, sends a POST request with JSON payload to the backend /login route.

*Based on response status, displays error or navigates to the dashboard.

*The dashboard is a simple placeholder page to confirm successful login.

Backend
*Express.js server listening on a chosen port (e.g., 5000).

*A single POST /login route handles incoming login requests.

*Validates the email and password against a static mock user:





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
