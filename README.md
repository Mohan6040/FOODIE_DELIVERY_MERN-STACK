# Project Setup & Run Guide

## Table of Contents
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend & Admin Panel Setup](#frontend--admin-panel-setup)

## Prerequisites
- **Node.js**: Ensure that Node.js is installed on your machine. If not, follow these steps:
  1. Visit the [official Node.js website](https://nodejs.org/en/download/).
  2. Download the Node.js installer.
  3. Run the installer and follow the prompts to complete the installation.

## Backend Setup
1. **Open Project Folder**:
   - Open the project folder in Visual Studio Code (VS Code).
   - Right-click on the sidebar and select "Open In Integrated Terminal".

2. **Install Dependencies**:
   - In the integrated terminal, type the following command and press Enter:
     ```bash
     npm install
     ```
   - Wait for the installation to complete.

3. **Setup MongoDB**:
   - Open the following link: [MongoDB](https://www.mongodb.com/).
   - Sign up on the website if you don't have an account.
   - Create a new project and go to the Database section to build a database.
   - Select M0, choose your region, and create the database.
   - Set up a username and password (avoid using the '@' symbol in the password).
   - Click on "Finish & Close".
   - Whitelist IP `0.0.0.0` and click on "Add Entry".
   - Click on "Connect" and select the Compass option.
   - Copy the connection string.
   - Open `db.js` in your project and replace `<password>` with the password you set previously. Save the changes.

4. **Setup Stripe**:
   - Open the `.env` file in the backend folder and paste your Stripe secret key into the `STRIPE_SECRET_KEY` variable.
   - Open the `orderController` file located in the `backend/controller` folder and add your country currency.

5. **Run Backend**:
   - In the integrated terminal, type the following command to start the backend server:
     ```bash
     npm run server
     ```

## Frontend & Admin Panel Setup
1. **Open Project Folder**:
   - Open the project folder in Visual Studio Code (VS Code).
   - Right-click on the sidebar and select "Open In Integrated Terminal".

2. **Install Dependencies**:
   - In the integrated terminal, type the following command and press Enter:
     ```bash
     npm install
     ```
   - Wait for the installation to complete. You should see a `node_modules` folder in the sidebar after installation.

3. **Run Frontend**:
   - In the integrated terminal, type the following command to start the frontend and admin panel:
     ```bash
     npm run dev
     ```
   - Your project should automatically open in your default web browser.

---

This README provides step-by-step instructions for setting up and running your MERN stack project. Follow the sections in order to successfully launch your project. For further assistance, consult the project documentation or support resources.
