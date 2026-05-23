# SyncBridge

SyncBridge is a modern, real-time video conferencing web application built with the MERN stack and WebRTC. It enables users to instantly create secure meeting rooms, share their screens, and chat in real-time without the need for additional software.

## 🚀 Live Demo
[SyncBridge on Vercel](https://sync-bridge-zeta.vercel.app/)

## 📸 Screenshots
*(To be Updated)*
<!-- Add your screenshots here -->

---

## 🛠 Tech Stack

### Frontend
- **React 18** – UI Library
- **React Router v6** – Client-side routing
- **Material UI (MUI v5)** – Reusable, accessible UI components
- **WebRTC** – Peer-to-peer audio and video streaming
- **Socket.io-client** – Real-time event handling
- **Vite** – Next-generation frontend tooling

### Backend
- **Node.js & Express.js** – Robust RESTful API and server framework
- **MongoDB & Mongoose** – NoSQL database and ODM for data persistence
- **Socket.io** – WebSocket server for WebRTC signaling and real-time text chat
- **Bcryptjs** – Secure password hashing

## ✨ Core Features
- **P2P Video & Audio Calling:** High-quality, low-latency communication via WebRTC.
- **Screen Sharing:** Instantly present your screen to other meeting participants.
- **Real-time Chat:** Integrated text chat alongside the video stream (powered by Socket.io).
- **User Authentication:** Secure registration and login flow using custom token strategies and password hashing.
- **Meeting History:** Automatic tracking and logging of previously joined meeting codes for quick access.
- **Responsive UI:** Clean, material-design-inspired layout that adapts well to various screen sizes.

---

## 📦 Local Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### 1️⃣ Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the `backend` directory and add your MongoDB connection string and Port:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=8000
   ```
4. Start the backend server (runs on `http://localhost:8000` by default):
   ```bash
   npm run dev
   ```

### 2️⃣ Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. *(Optional)* Configure the backend URL in `src/environment.js` if your backend is hosted elsewhere. 
4. Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## 🏗️ Project Architecture
The project follows a decoupled Monorepo pattern:
- **`backend/`**: Contains Express controllers, Mongoose models, and Socket.io signaling logic. Handles database operations and peer negotiations.
- **`frontend/`**: Contains React components, routing logic, and global contexts. Manages user media permissions, UI rendering, and WebRTC stream constraints.

## 🔗 API Endpoints (Core)
- `POST /api/v1/users/login` - Authenticate a user and receive a token.
- `POST /api/v1/users/register` - Create a new user account.
- `GET /api/v1/users/get_all_activity` - Fetch a user's past meeting history.
- `POST /api/v1/users/add_to_activity` - Log a new meeting entry.

---

## 📝 Planned Improvements
- Migration from custom tokens to standard JSON Web Tokens (JWT) for enhanced security.
- Adding a Redis adapter for Socket.io to support horizontal scaling.
- Implementing dedicated TURN servers for reliable WebRTC connections behind strict NATs/Firewalls.
