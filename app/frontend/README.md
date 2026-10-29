# Lainne Market

Lainne Market is a technology e-commerce storefront built from scratch as a hands-on software development and DevOps learning project.

The project is being developed incrementally, starting with the local frontend and progressing towards containerization, local Kubernetes, and a future AWS deployment.

## Project Status

**Current phase:** Local frontend development

The current application provides a product catalogue, category filtering, product search, a shopping bag, and a demo shopping assistant.

Backend services, persistent data storage, real checkout, container orchestration, and AWS deployment are future development areas unless explicitly documented as implemented.

## Technology Stack

### Currently Implemented
- React — frontend user interface
- Vite — local development server and frontend build tool
- JavaScript — application logic
- npm — dependency management
- ESLint — code quality checks

### Planned
- Docker — containerize the application and supporting services
- Kind — practise Kubernetes locally
- Backend API — handle application logic and frontend requests
- PostgreSQL — persistent application data
- Redis — caching or background-processing support, depending on final requirements
- AWS — future cloud hosting and infrastructure

Planned technologies are not yet confirmed as implemented.

## Current Features

- Browse sample technology products.
- Filter products by category.
- Search products by name.
- Add products to the shopping bag.
- Increase and decrease item quantities.
- Calculate the shopping bag subtotal.
- Open a demo shopping assistant.
- Navigate a responsive storefront interface.

Product data is currently defined in the frontend. Shopping bag information is held in React state and is not yet persisted to a database.

The shopping assistant currently uses predefined responses. Checkout is a demonstration only; no real orders or payments are processed.

## Prerequisites

To run the current frontend locally, you need:

- Node.js compatible with the installed Vite version
- npm
- Git (recommended for version control)
- A code editor such as Visual Studio Code
- A modern web browser

Docker, Kind, and AWS are not required to run the current frontend.

## Local Development Setup

### 1. Open the project directory

```bash
cd ~/Desktop/lainne-market
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will display a local URL in the terminal. Open that URL in your browser to view the application.

### 4. Build the frontend

```bash
npm run build
```

This generates the production build in the `dist` directory.

### 5. Run the linter

```bash
npm run lint
```

### 6. Preview the production build locally

```bash
npm run preview
```

Run the preview command after creating a production build.

## Application Structure

```text
lainne-market/
├── public/
├── screenshots/
├── jira-images/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

The structure above reflects the current project layout. Additional folders and services may be introduced as development progresses.

## Current Architecture

The current application runs as a frontend in the browser.

1. The browser loads the React application served by Vite during development.
2. React renders the storefront and handles user interactions.
3. Product filtering, search, and shopping bag calculations run in the frontend.
4. Product information is currently held in a local JavaScript array.
5. No backend API or database connection has been confirmed in the current implementation.

## Future Development Direction

### Docker

Containerize the frontend and, when introduced, the backend and supporting services. Document how the containers are configured, started, and connected.

### Local Kubernetes with Kind

Use Kind to practise deploying and managing containerized application components in a local Kubernetes cluster.

### Future AWS Deployment

Evaluate suitable AWS services once the local application architecture is established.

The future design should consider:

- Hosting and deployment architecture
- Networking and access control
- Application secrets and security
- Scaling and availability
- Logging, monitoring, and troubleshooting
- Resource cleanup and cost management

Specific AWS services will be selected when the application requirements and deployment design are clearer.

## Development Principles

- Build incrementally and validate each change.
- Keep documentation aligned with the actual implementation.
- Distinguish completed features from planned work.
- Use Git for version control and maintain a clear project history.
- Consider security, reliability, maintainability, and cost throughout the development process.

## Project Documentation

Jira is used to track project work, technical decisions, implementation tasks, and future improvements.

This README documents the current local setup and the intended direction of the project. It will be updated as the architecture evolves.

## Disclaimer

Lainne Market is a development and learning project. The current storefront uses sample product data and does not provide production-ready ordering or payment processing.

