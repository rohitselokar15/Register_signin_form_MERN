# MERN Login and Sign-Up System

This repository provides a basic implementation of a login and sign-up system using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create an account, log in, and view their profile.

## Prerequisites

Make sure you have the following installed:

- Node.js and npm
- MongoDB

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-login-signup.git
   cd mern-login-signup
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the environment variables:

   Create a `.env` file in the root directory and provide the following variables:

   ```env
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/mern-login-signup
   SECRET_KEY=your_secret_key
   ```

4. Start the server:

   ```bash
   npm run server
   ```

   This will start the Node.js server.

5. Start the React app:

   Open a new terminal and run:

   ```bash
   npm run client
   ```

   This will start the React app.

6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app in action.

## Features

- **User Authentication**: Users can sign up and log in securely.
- **Protected Routes**: Certain routes are protected and can only be accessed by authenticated users.
- **User Profile**: Users can view their profile after logging in.

## Technologies Used

- **MongoDB**: NoSQL database for storing user information.
- **Express.js**: Web framework for building the backend server.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for executing server-side code.
- **JWT**: JSON Web Tokens for secure user authentication.

## Contributing

Feel free to contribute to the development of this project by opening issues or submitting pull requests. Your feedback and suggestions are highly appreciated.
