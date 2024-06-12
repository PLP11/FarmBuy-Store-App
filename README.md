# FarmBuy-Store-App


## Step 1: Project Setup

### Create a new directory for your project and navigate into it.
```bash
mkdir FarmBuy Store
cd FarmBuy Store
```
### Initialize a new Node.js project.
```bash
npm init -y
```
### Install necessary dependencies.
```bash
npm install express mysql ejs bcryptjs express-session express-validator
```

## Step 2: Set up the Backend

### Create a `server.js` file in your project directory.

### Create a MySQL database named `real_app` 

#### Create users table
```bash
-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    full_name VARCHAR(255)
);
```
### Create other database table to handle the data

### Run the server.
```bash
node server.js
```

## Step 3: Frontend Setup

### Create an `home.html` file for the frontend.

### Create a `register.html` file for the course content.

### Create a `login.html` file for the leader board.

### Create a `styles.css` file to style your HTML.

### Create a `script.js` file to handle frontend interactions.

## Step 4: Testing
Open your web browser and navigate to http://localhost:3000.
