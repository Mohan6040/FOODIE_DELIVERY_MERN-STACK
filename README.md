# Project Setup & Run Guide

## Table of Contents
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Admin Panel Setup](#admin-setup)
- [MongoDB Atlas & Compass Setup](#mongodb-atlas--compass-setup)
- [Environment Variables](#environment-variables)

## Prerequisites
- **Node.js**: Ensure that Node.js is installed on your machine. If not, follow these steps:
  1. Visit the [official Node.js website](https://nodejs.org/en/download/).
  2. Download the Node.js installer.
  3. Run the installer and follow the prompts to complete the installation.
- **GitHub Account**: You'll need a GitHub account to clone the project repository.

## Backend Setup
1. **Clone the Project**:
   - Clone the project repository from GitHub using the following command:
     ```bash
     git clone <repository_url>
     ```
   - Replace `<repository_url>` with the URL of the project repository.

2. **Open Project Folder**:
   - Open the project folder in Visual Studio Code (VS Code).
   - Right-click on the sidebar and select "Open In Integrated Terminal".

3. **Install Backend Dependencies**:
   - In the integrated terminal, navigate to the backend folder within your project:
     ```bash
     cd backend
     ```
   - Then, type the following command and press Enter:
     ```bash
     npm install
     ```
   - Wait for the installation to complete.

4. **Setup Environment Variables**:
   - Create a file named `.env` in the backend folder.
   - Add the following environment variables to the `.env` file:
     ```plaintext
     JWT_SECRET="random#secret"
     STRIPE_SECRET_KEY="Paste your stripe secret key here"
     ```
   - Replace `"Paste your stripe secret key here"` with your actual Stripe secret key.

5. **Setup MongoDB Atlas**:
   - Follow the instructions provided in the [MongoDB Atlas & Compass Setup](#mongodb-atlas--compass-setup) section to set up MongoDB Atlas and connect your backend to the database.

6. **Run Backend Server**:
   - In the integrated terminal, type the following command to start the backend server:
     ```bash
     npm run server
     ```

## Frontend Setup
1. **Install Frontend Dependencies**:
   - In the integrated terminal, navigate to the frontend folder within your project:
     ```bash
     cd frontend
     ```
   - Then, type the following command and press Enter:
     ```bash
     npm install
     ```
   - Wait for the installation to complete. You should see a `node_modules` folder in the sidebar after installation.

2. **Run Frontend Server**:
   - In the integrated terminal, type the following command to start the frontend server:
     ```bash
     npm start
     ```
   - Your frontend will be accessible at `http://localhost:5174`.

## Admin Panel Setup
1. **Install Admin Panel Dependencies**:
   - In the integrated terminal, navigate to the admin panel folder within your project:
     ```bash
     cd admin
     ```
   - Then, type the following command and press Enter:
     ```bash
     npm install
     ```
   - Wait for the installation to complete. You should see a `node_modules` folder in the sidebar after installation.

2. **Run Admin Panel Server**:
   - In the integrated terminal, type the following command to start the admin panel server:
     ```bash
     npm start
     ```
   - Your admin panel will be accessible at `http://localhost:5173`.

## MongoDB Atlas & Compass Setup
Follow these steps to set up MongoDB Atlas and MongoDB Compass for database management.

### MongoDB Atlas
MongoDB Atlas is a cloud-hosted database service that allows you to set up, run, and scale MongoDB databases easily.

1. **Sign Up and Create a Cluster**:
   - Go to the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) website and sign up for an account.
   - Create a new project and a cluster within that project. Choose the free tier (M0) for testing and development purposes.

2. **Database User and Network Access**:
   - Create a database user with a username and password. Ensure the password does not contain the '@' symbol.
   - Whitelist your IP address (or use `0.0.0.0/0` to allow access from any IP, though this is not recommended for production).

3. **Connect to Your Cluster**:
   - Click the "Connect" button for your cluster.
   - Choose "Connect Your Application" and copy the connection string.
   - Replace `<password>` in the connection string with the password you set for your database user.
   - Update your `db.js` file in your project with this connection string.

### MongoDB Compass
MongoDB Compass is a graphical user interface (GUI) for MongoDB that allows you to visualize and interact with your data without needing to use the command line.

1. **Download and Install MongoDB Compass**:
   - Visit the [MongoDB Compass](https://www.mongodb.com/products/compass) download page.
   - Download the appropriate version for your operating system and install it.

2. **Connect to Your MongoDB Atlas Cluster**:
   - Open MongoDB Compass.
   - In the "New Connection" window, paste the connection string from MongoDB Atlas.
   - Replace `<password>` with your database user's password.
   - Click "Connect" to establish a connection to your Atlas cluster.

3. **Using MongoDB Compass**:
   - Once connected, you can use MongoDB Compass to view your databases, collections, and documents.
   - You can perform CRUD (Create, Read, Update, Delete) operations, visualize your schema, and run queries using the GUI.

## Environment Variables
The backend relies on certain environment variables for configuration. These variables should be stored in a `.env` file in the backend folder. Ensure you add the following variables to the `.env` file:

```plaintext
JWT_SECRET="random#secret"
STRIPE_SECRET_KEY="Paste your stripe secret key here"
```

Replace `"Paste your stripe secret key here"` with your actual Stripe secret key.

---

This README provides step-by-step instructions for setting up and running your MERN stack project. You'll find details on how to clone the project from GitHub, set up MongoDB Atlas and MongoDB Compass for database management, configure environment variables for the backend, and run both frontend and admin panel servers separately. Follow these instructions carefully to successfully launch your project. If you need further assistance, refer to the project documentation or seek support resources.
