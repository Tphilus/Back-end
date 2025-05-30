# 04-store-api

## What is this?

This project is a backend server built with **Node.js**, **Express**, and **MongoDB**. It handles requests from users, talks to the database, and sends back the data needed. It’s the “brain” behind a web or mobile app.

---

## How Does the Backend Work?

1. **Node.js** runs JavaScript code on the server.  
2. **Express** is a tool that helps build web servers easily. It listens to requests like "Give me all users" or "Add a new item".  
3. **MongoDB** is where all the data is stored in a flexible, JSON-like format.  
4. When the server gets a request:  
   - Express checks which route (URL) was requested.  
   - It runs some code (called a controller) to process the request.  
   - This code talks to MongoDB to get or save data.  
   - Finally, Express sends back a response with the data or a success/error message.  

---

## What Can This Backend Do?

- read 
- Organize routes so each URL does a specific job  
- Connect to a MongoDB database to store and fetch data  
- Handle errors 

---


