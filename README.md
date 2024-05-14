# NoteCode - Code Sharing App

NoteCode is a simple code-sharing application that allows users to store and share coding snippets easily. This project was developed as a fullstack challenge to test and demonstrate basic skills in front-end and back-end development. The application enables users to create, save, and share code snippets with unique IDs.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [User Stories](#user-stories)
- [Contributing](#contributing)
- [License](#license)
- [Live Demo](#live-demo)
- [Repository](#repository)

## Features

- Create and share code snippets with a unique ID.
- View default HTML snippet upon first load.
- Save code snippets with a chosen language and theme.
- Disable the `Share` button until edits are made after saving.
- Responsive design for all devices.

## Tech Stack

- **Front-end**: React, TailwindCSS, React Router
- **Back-end**: Node.js, Express
- **Database**: MongoDB, Mongoose

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/xGeekoo/note-code.git
    cd note-code
    ```

2. **Install dependencies for the server and client:**

    ```sh
    # For server
    cd server
    npm install
    
    # For client
    cd ../client
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `server` directory and add the following:

    ```env
    DB_HOST=your_mongodb_connection_string
    PORT=3000
    ```

4. **Run the development server:**

    ```sh
    npm run dev
    ```

    To run the application in production mode, use:

    ```sh
    npm run prod
    ```

    The application should now be running on `http://localhost:3000` for the back-end and `http://localhost:5173` for the front-end.

## Usage

1. Open the application in your web browser.
2. By default, an HTML snippet will be displayed.
3. Edit the snippet and choose your preferred language and theme.
4. Click the `Share` button to generate a unique ID for your snippet.
5. Use the generated URL to share your code snippet with others.
6. The `Share` button will be disabled until you make further edits to the code.

## User Stories

1. **Create a Coding Sharing App - NoteCode following given design.**
2. **By default, users should see an HTML given snippet.** See `Code Guide` for default HTML code.
3. **When users select the `Share` button, a new ID should be generated, and users can access the saved code with the generated ID.** See `Code Guide` for more details.
4. **After code is saved and shared, `Share` button should be disabled until users make an edit.**
5. **Users can choose the language and theme they want to save and share.**
6. **The application should be responsive on all devices.**
7. **Deploy the solution and submit Repository URL and Demo URL.**

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Live Demo

Check out the live demo of the application [here](https://note-code.onrender.com/).

## Repository

You can find the repository for this project [here](https://github.com/xGeekoo/note-code). The main branch is `main` and the production branch is `prod`.
