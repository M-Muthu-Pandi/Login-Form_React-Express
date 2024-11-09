# Full Stack Login Application

This is a **Full Stack Login Application** built with React, Express, and Axios. The app allows users to log in with a simple form and displays a success or failure message based on the entered credentials.

## Features

- **Frontend**:
  - Built with **React** and **React Router** for smooth navigation.
  - Simple login form with fields for username and password.
  - Conditional rendering of success and failure pages based on login validation.
  
- **Backend**:
  - **Express** server that verifies login credentials.
  - **CORS** enabled to allow secure communication between frontend and backend.
  - GET and POST methods to handle login requests flexibly.

## Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express

## Project Structure

```
project-root
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Form.jsx        # Login form with Axios API request
│   │   │   ├── Success.jsx     # Success message component
│   │   │   └── Fail.jsx        # Failure message component
│   │   └── App.jsx             # Main component with route setup
│   └── index.js                # Frontend entry file
└── backend
    └── index.js                # Express server setup
```

## Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed.

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/full-stack-login-app.git
    cd full-stack-login-app
    ```

2. **Install dependencies** for both frontend and backend:

    ```bash
    # Frontend
    cd frontend
    npm install

    # Backend
    cd ../backend
    npm install
    ```

3. **Start the backend server**:

    ```bash
    cd backend
    node index.js
    # Server running on http://localhost:5050
    ```

4. **Run the frontend application**:

    ```bash
    cd ../frontend
    npm start
    # React app running on http://localhost:3000
    ```

## Usage

1. Open the app at `http://localhost:3000`.
2. Enter the credentials:
   - **Username**: Muthu
   - **Password**: 444
3. Click **Login** to see a success or failure message based on the credentials.

## Code Overview

- **Frontend**:
  - `Form.jsx`: Renders the login form and sends credentials to the backend.
  - `Success.jsx` and `Fail.jsx`: Display success or failure messages after login attempts.

- **Backend**:
  - `index.js`: Express server that checks credentials through a GET request.

## Future Enhancements

- Implementing secure token-based authentication.
- Adding form validation on the frontend.
- Enhancing UI for a better user experience.

## License

This project is licensed under the MIT License.