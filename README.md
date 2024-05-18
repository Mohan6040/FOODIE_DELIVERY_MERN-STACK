# FOODIE DELIVERY MERN-STACK

Welcome to FOODIE DELIVERY, a MERN (MongoDB, Express.js, React.js, Node.js) stack project for managing food delivery services.


## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Setup & Run Guide](#setup--run-guide)
    - [Prerequisites](#prerequisites)
    - [Backend Setup](#backend-setup)
    - [Frontend & Admin Setup](#frontend--admin-setup)
    - [Database Setup](#database-setup)
    - [Environment Variables](#environment-variables)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

FOODIE DELIVERY is a full-stack web application designed to streamline the process of online food ordering and delivery. It provides a user-friendly interface for customers to browse restaurants, view menus, place orders, and track deliveries. Restaurant owners/administrators can manage their establishments, menus, orders, and delivery operations through a dedicated admin panel.

## Features

- **User Interface**:
  - Responsive design for seamless user experience across devices.
  - Intuitive navigation and user-friendly interface.
- **Customer Experience**:
  - Browse restaurants by location, cuisine, or rating.
  - View detailed restaurant information, including menus, reviews, and ratings.
  - Place orders with customizations and special instructions.
  - Track order status and estimated delivery time.
- **Admin Panel**:
  - Manage restaurant details, including name, location, and contact information.
  - Create and update menus with customizable items and pricing.
  - View and process incoming orders, update order status, and assign deliveries.
- **Authentication & Security**:
  - User authentication with JWT (JSON Web Tokens) for secure access to features.
  - Password hashing for enhanced security of user accounts.
- **Payment Integration**:
  - Integration with Stripe for secure and seamless payment processing.
  - Support for various payment methods, including credit/debit cards and digital wallets.

## Project Structure

The project follows a modular structure with separate directories for the backend, frontend, and admin components. Here's an overview of the directory structure:

```
FOODIE_DELIVERY_MERN-STACK/
│
├── backend/              # Backend server application
│   ├── controllers/      # Request handlers for different routes
│   ├── models/           # MongoDB models for data schema
│   ├── routes/           # API routes and endpoint definitions
│   ├── middleware/       # Middleware functions for request processing
│   ├── config/           # Configuration files (e.g., database connection)
│   └── server.js         # Main entry point for backend server
│
├── frontend/             # Frontend web application (customer interface)
│   ├── public/           # Static assets (HTML, images, etc.)
│   ├── src/              # React components, styles, and logic
│   └── ...
│
├── admin/                # Admin panel web application
│   ├── public/           # Static assets (HTML, images, etc.)
│   ├── src/              # React components, styles, and logic
│   └── ...
│
└── ...
```

## Setup & Run Guide

### Prerequisites

Before getting started, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/): JavaScript runtime environment.
- [Git](https://git-scm.com/downloads): Version control system (required for cloning the project repository).
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (optional): Cloud-hosted MongoDB database service.

### Backend Setup

1. **Clone the Project**:
   ```bash
   git clone https://github.com/Mohan6040/FOODIE_DELIVERY_MERN-STACK.git
   cd FOODIE_DELIVERY_MERN-STACK
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Setup Environment Variables**:
   - Create a `.env` file in the backend directory.
   - Add the following environment variables:
     ```plaintext
     JWT_SECRET="random#secret"
     STRIPE_SECRET_KEY="Paste your stripe secret key here"
     ```
     Replace `"Paste your stripe secret key here"` with your actual Stripe secret key.

4. **Setup MongoDB Atlas**:
   - Follow the instructions in the [Database Setup](#database-setup) section.

5. **Setup Stripe**:
   - Open the `.env` file in the backend folder and paste your Stripe secret key in the `STRIPE_SECRET_KEY` variable.
   - Open the `orderController` file located in the `backend/controllers` folder and add your country currency.

6. **Run Backend Server**:
   ```bash
   npm run server
   ```

### Frontend & Admin Setup

1. **Install Frontend Dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```

2. **Run Frontend Server**:
   ```bash
   npm run dev
   ```
   Your frontend will be accessible at [http://localhost:5174/](http://localhost:5174/).

3. **Install Admin Dependencies**:
   ```bash
   cd ../admin
   npm install
   ```

4. **Run Admin Server**:
   ```bash
   npm run dev
   ```
   The admin panel will be accessible at [http://localhost:5173/](http://localhost:5173/).

### Database Setup

Follow these steps if you're using MongoDB Atlas for database management.

1. **Sign Up and Create a Cluster**:
   - Go to the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) website and sign up for an account.
   - Create a new project and a cluster within that project. Choose the free tier (M0) for testing and development purposes.

2. **Database User and Network Access**:
   - Create a database user with a username and password.
   - Whitelist your IP address.

3. **Connect to Your Cluster**:
   - Obtain the connection string.
   - Replace `<password>` in the connection string with the database user's password.
   - Update your `db.js` file in the backend with this connection string.

### Environment Variables

Ensure the following environment variables are stored in the backend `.env` file:

```plaintext
JWT_SECRET="random#secret"
STRIPE_SECRET_KEY="Paste your stripe secret key here"
```

Replace `"Paste your stripe secret key here"` with your actual Stripe secret key.

## Contributing

Contributions to FOODIE DELIVERY are welcome! If you have suggestions for new features, improvements, or bug fixes, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides detailed instructions for setting up and running the FOODIE DELIVERY MERN-STACK project. It covers prerequisites, project structure, setup guides for the backend, frontend, and admin components, database setup (optional), environment variables, and information on contributing and licensing. If you encounter any issues or need further assistance, please refer to the project documentation or seek support resources. Enjoy building and managing your food delivery service with FOODIE DELIVERY!
