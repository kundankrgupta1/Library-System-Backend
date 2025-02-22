Library Management System

📌 Overview

The Library Management System is a web application that facilitates book management and user role-based authentication. It allows librarians to manage books and registered members, while members can borrow and return books.

🚀 Features

🔐 Role-Based Authentication

Librarian and Member roles with specific access rights.

🛠️ Librarian Features

View all registered members.

Delete registered members.

Add, delete, edit, and update books.

📚 Member Features

Borrow books.

Return borrowed books.

🔧 Tech Stack

Frontend: React.js / HTML / CSS / JavaScript

Backend: Node.js / Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Hosting: Deployed on Render

🛠 Installation & Setup

Clone the Repository

git clone https://github.com/your-username/library-management-system.git
cd library-management-system

Install Dependencies

Backend

cd backend
npm install

Frontend

cd frontend
npm install

Environment Variables

Create a .env file in the backend directory and add the following variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the Application

Backend

npm start

Frontend

npm start

🔗 Deployment

This project is deployed on Render. You can check out the live version here:
Live Demo

👨‍💻 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.
