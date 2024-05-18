# MERN Stack Food Delivery Fullstack Project

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Admin Setup](#admin-setup)
- [MongoDB Atlas & Compass Setup](#mongodb-atlas--compass-setup)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Overview
This project is a full-stack food delivery application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides users with a platform to explore a diverse menu, place orders, and manage their cart. The admin section allows restaurant owners to add items, list items, and manage orders efficiently.

## Prerequisites
- **Node.js**: Ensure that Node.js is installed on your machine. If not, visit the [official Node.js website](https://nodejs.org/en/download/) to download and install it.
- **GitHub Account**: You'll need a GitHub account to clone the project repository.

## Backend Setup
1. **Clone the Project**:
   - Clone the project repository from GitHub using the following command:
     ```bash
     git clone [<repository_url>](https://github.com/Mohan6040/FOODIE_DELIVERY_MERN-STACK.git)
     ```
  

2. **Open Project Folder**:
   - Open the project folder in Visual Studio Code (VS Code) or any preferred code editor.

3. **Install Backend Dependencies**:
   - Navigate to the backend folder within your project in the terminal:
     ```bash
     cd backend
     ```
   - Install backend dependencies by running:
     ```bash
     npm install
     ```

4. **Setup Environment Variables**:
   - Create a `.env` file in the backend folder.
   - Add the following environment variables to the `.env` file:
     ```plaintext
     JWT_SECRET="random#secret"
     STRIPE_SECRET_KEY="Paste your stripe secret key here"
     ```
   - Replace `"Paste your stripe secret key here"` with your actual Stripe secret key.

5. **Setup MongoDB Atlas**:
   - Follow the instructions provided in the [MongoDB Atlas & Compass Setup](#mongodb-atlas--compass-setup) section to set up MongoDB Atlas and connect your backend to the database.

6. **Run Backend Server**:
   - Start the backend server by running:
     ```bash
     npm run server
     ```

## Frontend Setup
1. **Install Frontend Dependencies**:
   - Navigate to the frontend folder within your project in the terminal:
     ```bash
     cd frontend
     ```
   - Install frontend dependencies by running:
     ```bash
     npm install
     ```

2. **Run Frontend Server**:
   - Start the frontend server by running:
     ```bash
     npm start
     ```
   - Access the frontend at `http://localhost:5174`.

## Admin Setup
1. **Install Admin Dependencies**:
   - Navigate to the admin folder within your project in the terminal:
     ```bash
     cd admin
     ```
   - Install admin dependencies by running:
     ```bash
     npm install
     ```

2. **Run Admin Server**:
   - Start the admin server by running:
     ```bash
     npm start
     ```
   - Access the admin section at `http://localhost:5173`.

## MongoDB Atlas & Compass Setup
Follow these steps to set up MongoDB Atlas and MongoDB Compass for database management.

### MongoDB Atlas
1. **Sign Up and Create a Cluster**:
   - Visit the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) website, sign up for an account, and create a new project with a cluster.

2. **Database User and Network Access**:
   - Create a database user with a username and password, and whitelist your IP address.

3. **Connect to Your Cluster**:
   - Obtain the connection string from MongoDB Atlas and replace the placeholder `<password>` with your database user's password.

### MongoDB Compass
1. **Download and Install MongoDB Compass**:
   - Visit the [MongoDB Compass](https://www.mongodb.com/products/compass) download page, download the appropriate version for your OS, and install it.

2. **Connect to Your MongoDB Atlas Cluster**:
   - Open MongoDB Compass, paste the connection string from MongoDB Atlas, replace `<password>` with your database user's password, and click "Connect".

## Environment Variables
Ensure you add the following environment variables to a `.env` file in the backend folder:

```plaintext
JWT_SECRET="random#secret"
STRIPE_SECRET_KEY="Paste your stripe secret key here"
```

Replace `"Paste your stripe secret key here"` with your actual Stripe secret key.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request on the project's GitHub repository.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides detailed instructions for setting up and running your MERN stack food delivery project. Follow these steps carefully to successfully launch your application. If you encounter any issues or have questions, refer to the project documentation or seek support resources. Contributions to enhance the project are appreciated, and the project is open-source under the MIT License.
