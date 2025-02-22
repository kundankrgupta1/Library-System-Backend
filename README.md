# Library Management System

## 📌 Overview
The **Library Management System** is a web application that facilitates book management and user role-based authentication. It allows **librarians** to manage books and registered members, while **members** can borrow and return books.

## 🚀 Features

### 🔐 Role-Based Authentication
- **Librarian** and **Member** roles with specific access rights.

### 🛠️ Librarian Features
- View all registered members.
- Delete registered members.
- Add, delete, edit, and update books.

### 📚 Member Features
- Borrow books.
- Return borrowed books.

## 🔧 Tech Stack
- **Backend:** Node.js / Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Hosting:** Deployed on [Render](https://render.com/)

## 🛠 Installation & Setup
### Clone the Repository
```bash
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
```

### Install Dependencies
#### Backend
```bash
cd backend
npm install
```

### Environment Variables
Create a `.env` file in the backend directory and add the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Start the Application
#### Backend
```bash
npm run dev
```

## 🔗 Deployment
This project is deployed on **Render**. You can check out the live version here:
[Live Demo](https://library-system-backend-61ga.onrender.com/)

## 👨‍💻 Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests.
