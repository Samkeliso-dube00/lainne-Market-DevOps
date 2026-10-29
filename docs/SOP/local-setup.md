
# 🛍️ Lainne Market : Local Setup Guide

This guide explains how to install, run, and test Lainne Market on your local machine.

## 📋 Table of Contents

1. Prerequisites
2. Getting Started
3. Running the Application
4. Verification
5. Quality Checks
6. Production Build
7. Troubleshooting
8. Quick Reference
9. Project Scope
10. Expected Outcome

---

## ✅ 1. Prerequisites

Install the following tools:

| Tool | Requirement | Purpose |
|---|---|---|
| Node.js | 20.19+ or 22.12+ | Runs the application tools |
| npm | Included with Node.js | Installs dependencies |
| Git | Installed | Clones the repository |
| Web browser | Modern browser | Opens the application |

Verify your installation:

```bash
node --version
npm --version
git --version
```

---

## 📦 2. Getting Started

### Clone the repository

```bash
git clone https://github.com/Samkeliso-dube00/lainne-Market-DevOps.git
cd lainne-market
```


### Navigate to the frontend

```bash
cd app/frontend
```

### Install dependencies

```bash
npm install
```

This installs the packages required by the application.

---

## 🚀 3. Running the Application

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

`http://localhost:5173/`

Keep the terminal running while using the application.

---

## ✔️ 4. Verification

Confirm that:

- [ ] The homepage loads.
- [ ] Products are displayed.
- [ ] Search and category filtering work.
- [ ] Shopping cart quantities and subtotal update correctly.
- [ ] The demonstration chat interface responds.
- [ ] No unexpected browser errors appear.

---

## 🔍 5. Quality Checks

Run the linter:

```bash
npm run lint
```

This checks the code against the project's ESLint rules.

---

## 🏗️ 6. Production Build

Build the application:

```bash
npm run build
```

The production files are generated in the `dist/` directory.

Preview the build:

```bash
npm run preview
```

Open the URL displayed in the terminal to test the production version locally.

---

## 🐛 7. Troubleshooting

### Dependencies fail to install

- Check your Node.js and npm versions.
- Check your internet connection.
- Review the npm error output.

### Application does not open

- Confirm the development server is running.
- Use the URL displayed in the terminal.
- Check the terminal and browser console for errors.

### Port 5173 is already in use

- Use the alternative URL displayed by Vite.

### Build or lint fails

- Run `npm run lint` and `npm run build` separately.
- Review and fix the reported errors.

---

## 📌 8. Quick Reference

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run lint` | Check code quality |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `Ctrl + C` | Stop the running server |

---

## 📊 9. Project Scope

**Included:** React frontend, Vite development server, product interface, shopping cart, and production build.

**Not included:** Backend integration, database, authentication, Docker, or cloud deployment.

---

## 🎯 10. Expected Outcome

After following this guide, a developer should be able to:

- Install the required dependencies.
- Run Lainne Market locally.
- Verify the application's main functionality.
- Run code quality checks using ESLint.
- Generate and preview a production build.

By completing these steps, the developer will have a working local environment for developing and testing Lainne Market.

---

**Happy building! 🚀**

*Last updated: October 2026*
