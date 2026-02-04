[![Switch to Portuguese](https://img.shields.io/badge/Switch_to-Portuguese-800080?style=for-the-badge)](https://github.com/Vitorialuz229/desafio_bolt_geradores_frontend/blob/main/README.md)

# Bolt Generators Frontend Challenge

Frontend application responsible for consuming a REST API that provides normalized data from the RALIE dataset of ANEEL, displaying the 5 largest energy producers in Brazil in a user-friendly interface.

## Image Project
![Image](src/app/assets/image.png)

## Technologies Used

- **Angular**: Framework for developing Single Page Applications (SPA).
- **TailwindCSS**: Utility-first framework for fast and responsive styling.
- **Node.js**: JavaScript runtime environment for server-side execution.
- **RxJS**: To manage asynchronous data flows using Observables.
- **HTTPClient**: Service for making HTTP requests to the REST API.

## Prerequisites

To run the project locally, you need to have installed:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **Angular CLI**: Install Angular CLI globally if you haven't yet:

  ```bash
  npm install -g @angular/cli
  ```

## How to Run the Project
Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
    git clone https://github.com/Vitorialuz229/desafio_bolt_geradores_frontend.git
    cd desafio_bolt_geradores_frontend
```

## Step 2: Install Dependencies

Install all project dependencies:

```bash
    npm install
```

## Step 3: Run the Project Locally

To start the development server:

```bash
    ng serve
```

This will start the server at `http://localhost:4200/.` Open your browser and access this URL to see the application in action.

## Functionality

The application consumes a REST API that returns the 5 largest energy producers in Brazil. The frontend displays the information clearly and responsively using a table that shows:

- Plant Code
- Plant Name
- State (UF)
- Generation Type
- Granted Capacity (in kW)
- Publication Date

## Author
Vitória Luz Alves D' Abadia
