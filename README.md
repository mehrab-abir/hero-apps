# AppHub

AppHub - is a modern, interactive React web application designed to showcase and manage a collection of web/mobile apps. It allows users to browse, search, view detailed app statistics, and simulate installation/uninstallation — all handled with local storage for persistent state management.

## 🧠 Project Overview
- AppHub provides an engaging user interface where users can:
- Explore a curated list of applications.
- View details including downloads, ratings, reviews, and descriptions.
- Simulate installation/uninstallation with persistent data stored locally.
- Visualize ratings with interactive Recharts bar graphs.
- Enjoy smooth loading animations and real-time toast feedback.

## ⚙️ Key Features

### 🏠 Home Page
- Modern, clean landing page displaying trending apps and stats.
- Modular components for maintainability and scalability.

### 🔍 App Browsing (Apps.jsx)
- Dynamic search filtering by app title.
- Responsive grid layout displaying app cards.
- Built-in loading animation using react-loader-spinner.

### 📱 App Details (AppDetails.jsx)
- Detailed view showing app image, developer info, download stats, and reviews.
- Interactive rating visualization using Recharts.
- Toast notifications for installation confirmation.
- Smart error handling — shows a friendly “App Not Found” screen for invalid IDs.

### ⚡ Installation Management (Installation.jsx)
- Displays all user-installed apps with sorting functionality by ratings.
- Local storage used to persist installation state across reloads.
- Smooth uninstall animations with toast confirmation.

### 💾 Local Storage Logic (localStorage.js)
- Custom utility functions to handle app installation and removal.
- Prevents duplicate installations and ensures persistence.

### 🧰 Tech Stack
- React (Vite Setup)
- React Router
- Tailwind CSS + Daisy UI
- Local Storage API
