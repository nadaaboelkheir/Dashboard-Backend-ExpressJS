
# Dashboard Project with Express.js and MongoDB 

## Overview

This project is a dashboard built using Express.js and MongoDB that provides CRUD operations for managing dues and announcements. It features the ability to retrieve all dues and announcements with pagination and limits, ensuring efficient data handling. The project uses Express Validator middleware for validating fields and Mongoose for interacting with MongoDB. The code is structured with a focus on cleanliness and maintainability.

## Features

- **CRUD Operations:** Create, Read, Update, and Delete operations for dues and announcements.
- **limit:** Retrieve all dues and announcements with limit .
- **Field Validation:** Uses Express Validator middleware to ensure that input fields are validated.
- **Clean Architecture:** Organized codebase with a focus on maintainability and clarity.
- **Environment Variables:** Utilizes `.env` file for configuration and sensitive information.
### Deployment

 **Deploy with Railway:**

  dashboard-backend-expressjs-production.up.railway.app

## API Endpoints Documentation

development :https://documenter.getpostman.com/view/35056512/2sAXqmA57W
production : https://documenter.getpostman.com/view/35056512/2sAXqmA57W

## Code Structure

- `config/`: Contains configuration files and `.env` setup.
- `controllers/`: Contains the logic for handling requests.
- `models/`: Contains Mongoose schemas and models.
- `routes/`: Defines the API routes.
- `middleware/`: Contains Express Validator middleware.
- `utils/`: Utility functions and helpers.
- `app.js`: Main application file that sets up middleware, routes, and server.



## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Cloud-based instance)
- [Railway](https://railway.app/) account for deployment

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/express-mongo-dashboard.git
   cd express-mongo-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory:**

   ```bash
   touch .env
   ```

   Add the following environment variables to the `.env` file:

   ```env
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   PORT=5000
   ```

   Replace `your-database-name` with the name of your MongoDB database.

4. **Start the server locally:**

   ```bash
   npm run dev
   ```


