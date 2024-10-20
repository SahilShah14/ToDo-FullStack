# MADTASKER

## Links
- [Client Repository](https://github.com/yourusername/To-Do-List-Client)
- [Server Repository](https://github.com/yourusername/To-Do-List-Server)
- [Postman Collection](https://www.postman.com/yourcollectionlink)

## About the App
**MADTASKER** is a full-stack To-Do List application built with React/Next.js for the front-end and Node.js for the back-end. Users can create, view, edit, delete, and mark tasks as completed. The app is designed to be intuitive and responsive, ensuring a smooth user experience on both desktop and mobile devices.

## Screenshots
![Task List View](./To-Do-List-Client/public/task-list.png)
![Task Detail View](./To-Do-List-Client/public/task-detail.png)


## Directory Structure
.
├── README.md
├── To-Do-List-Client
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   │   ├── sticky-note.svg
│   │   └── vite.svg
│   ├── README.md
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── auth
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   └── SignupForm.jsx
│   │   │   ├── layout
│   │   │   │   ├── LoadingSpinner.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   └── Navbar.jsx
│   │   │   ├── tasks
│   │   │   │   ├── AddTaskModal.jsx
│   │   │   │   ├── CompletedTasksModal.jsx
│   │   │   │   ├── DeleteConfirmationModal.jsx
│   │   │   │   ├── EditTaskModal.jsx
│   │   │   │   ├── TaskItem.jsx
│   │   │   │   └── TaskList.jsx
│   │   │   └── context
│   │   │       └── AuthContext.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── Auth.jsx
│   │   │   └── Home.jsx
│   │   ├── services
│   │   │   └── api.jsx
│   │   ├── ToastStyles.css
│   │   └── utils
│   │       └── axios.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
└── To-Do-List-Server
    ├── .env
    ├── config
    │   ├── config.js
    │   └── db.js
    ├── controllers
    │   ├── authController.js
    │   └── taskController.js
    ├── middleware
    │   ├── auth.js
    │   ├── errorHandler.js
    │   └── validator.js
    ├── models
    │   ├── Task.js
    │   └── User.js
    ├── package-lock.json
    ├── package.json
    ├── routes
    │   ├── authRoutes.js
    │   └── taskRoutes.js
    ├── server.js
    └── utils
        └── errorResponse.js

## Prerequisites
Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (Version 14 or higher)
- A MongoDB database (You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution)


## Installation Process

### Back-End Setup
1. Clone the repository:

   git clone https://github.com/yourusername/To-Do-List-Server.git

2. Navigate into the server directory:

   cd To-Do-List-Server
3. Install dependencies:

   npm install

4. Create a `.env` file in the root of the server directory with the following variables:

   MONGO_URI="your_mongo_uri"
   JWT_SECRET="your_jwt_secret"


5. Start the development server:

   npm run dev

### Front-End Setup
1. Navigate into the client directory:

   cd To-Do-List-Client


2. Install dependencies:

   npm install

3. Update the API URL in the `utils/axios.jsx` file to point to your back-end:
   ```javascript
   const API_URL = "http://localhost:5000"; // Change this if necessary
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

Now you can access the application at `http://localhost:3000` for the front end and `http://localhost:5000` for the back end.

## Challenges Faced
During the development of MADTASKER, I faced several challenges, including:
- Ensuring seamless communication between the front-end and back-end.
- Implementing authentication securely while maintaining user-friendly features.
- Designing a responsive UI that works well on various devices.

## Conclusion
MADTASKER is a comprehensive full-stack application that demonstrates my capabilities in front-end and back-end development. The app is fully functional and meets all the project requirements outlined in the pre-screening process.

### How to Use
1. Replace `yourusername` in the repository links with your actual GitHub username.
2. Adjust the Postman collection link to point to your collection.
3. Update the images in the **Screenshots** section with the correct paths or URLs of your application screenshots.
4. Save the above code as `README.md` in the root of your project directory. 

This `README.md` is structured to provide clear navigation and information about your project, making it easier for reviewers and users to understand the functionality and setup of your application.