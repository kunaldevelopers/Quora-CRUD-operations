# Quora Page

## Description

This project is a simple RESTful API built with Express.js that simulates a Quora-like page. It demonstrates basic CRUD operations for managing posts, including creating, reading, updating, and deleting posts. The project uses EJS for templating and `method-override` for supporting PUT and DELETE methods in HTML forms.

## Features

- View all posts
- View a single post
- Create a new post
- Edit an existing post
- Delete a post

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/kunaldevelopers/Quora-CRUD-operations
   ```

2. Navigate to the project directory:
   ```sh
   cd Quora-CRUD-operations
   ```

3. Install dependencies:
   ```sh
   npm install express && npm install ejs && npm install method-override && npm install uuid
   ```

4. Start the server:
   ```sh
   node index.js
   ```

5. Open your browser and navigate to `http://localhost:8080/posts`.

## File Structure

```
|-- public
|   |-- style.css
|-- views
|   |-- edit.ejs
|   |-- form.ejs
|   |-- home.ejs
|   |-- show.ejs
|-- index.js
|-- package.json
|-- package-lock.json
```

## Routes

- `GET /posts` - View all posts
- `GET /posts/new` - Form to create a new post
- `POST /posts` - Create a new post
- `GET /posts/:id` - View a specific post
- `GET /posts/:id/edit` - Form to edit a specific post
- `PATCH /posts/:id` - Update a specific post
- `DELETE /posts/:id` - Delete a specific post

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- UUID (for generating unique IDs)
- Method-Override (for supporting PUT and DELETE methods in forms)

## Developer

 - Kunal Kumar

## Contact

For any inquiries or feedback, please contact Kunal Kumar at Globes24media@gmail.com.