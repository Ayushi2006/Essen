<div align="center">

# 🍽️ Essen — Food Delivery App

### *Delicious food, delivered fast.*

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-Vite-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT Auth](https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<br/>

> **Essen** *(German for "to eat")* is a full-stack food delivery web application built with the MERN stack. It offers a sleek, glassmorphism-inspired UI where users can browse restaurant menus, search for dishes, manage their cart, and place orders — all with secure JWT-based authentication and real-time order tracking from a profile dashboard.

<br/>

</div>

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Running the Project](#-running-the-project)
- [Screenshots](#-screenshots)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| ⚛️ React (Vite) | UI framework with fast HMR |
| 🎨 Tailwind CSS | Utility-first styling & glassmorphism UI |
| 🔗 React Router DOM | Client-side routing & navigation |
| 📡 Axios | HTTP requests to REST API |

### Backend

| Technology | Purpose |
|---|---|
| 🟢 Node.js | Runtime environment |
| 🚂 Express.js | RESTful API framework |
| 🍃 MongoDB + Mongoose | NoSQL database & ODM |
| 🔐 JWT (jsonwebtoken) | Stateless authentication |
| 🔒 bcryptjs | Password hashing |

---

## ✨ Features

- 🔐 **User Authentication** — Secure Signup & Login with JWT tokens and bcrypt password hashing
- 🍕 **Food Listings** — Dynamic food items fetched from MongoDB via REST API
- 🔍 **Search Functionality** — Real-time dish search with instant filtering
- 🛒 **Cart System** — Add/remove items with persistent cart state via React Context
- ➕➖ **Quantity Control** — Increment and decrement item quantities in cart
- 💰 **Price Calculation** — Automatic real-time total price computation
- 💳 **Fake Payment Page** — UI for UPI, Credit/Debit Card, and Cash on Delivery
- 📦 **Order Management** — Placed orders stored and tracked in MongoDB
- 👤 **Profile Dashboard** — View order history and live order status
- 📱 **Fully Responsive** — Mobile-first glassmorphism design, works on all devices

---

## 📁 Project Structure

```
food-delivery-app/
│
├── client/                         # React Frontend (Vite)
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── FoodCard.jsx
│   │   │   ├── CartItem.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/                  # Route-level page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Payment.jsx
│   │   │   ├── OrderConfirm.jsx
│   │   │   └── Profile.jsx
│   │   ├── context/                # Global state management
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   ├── App.jsx                 # Root component & routing
│   │   └── main.jsx                # Vite entry point
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                         # Node.js + Express Backend
│   ├── config/
│   │   └── db.js                   # MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.js       # Signup / Login logic
│   │   ├── foodController.js       # Food CRUD operations
│   │   └── orderController.js      # Order placement & retrieval
│   ├── middleware/
│   │   └── authMiddleware.js       # JWT token verification
│   ├── models/
│   │   ├── User.js                 # Mongoose User schema
│   │   ├── Food.js                 # Mongoose Food schema
│   │   └── Order.js                # Mongoose Order schema
│   ├── routes/
│   │   ├── authRoutes.js           # /api/auth/*
│   │   ├── foodRoutes.js           # /api/food/*
│   │   └── orderRoutes.js          # /api/orders/*
│   ├── server.js                   # Express app entry point
│   ├── .env                        # Environment variables
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas URI)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/essen-food-delivery.git
cd essen-food-delivery
```

### 2. Install Server Dependencies

```bash
cd server
npm install
```

### 3. Install Client Dependencies

```bash
cd ../client
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `/server` directory (see [Environment Variables](#-environment-variables) section below).

---

## 🔑 Environment Variables

Create a `.env` file in the `/server` directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/essen?retryWrites=true&w=majority

# JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d
```

> ⚠️ **Never commit your `.env` file.** It is already included in `.gitignore`.

For the client, if you need to configure the base API URL, create a `.env` file in `/client`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 📡 API Reference

### 🔐 Auth Routes — `/api/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/api/auth/register` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Login and get JWT token | ❌ |
| `GET` | `/api/auth/me` | Get current user info | ✅ |

**Request Body — Register / Login:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

---

### 🍕 Food Routes — `/api/food`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/api/food` | Get all food items | ❌ |
| `GET` | `/api/food/:id` | Get single food item | ❌ |
| `POST` | `/api/food` | Add new food item (admin) | ✅ |
| `DELETE` | `/api/food/:id` | Delete food item (admin) | ✅ |

---

### 📦 Order Routes — `/api/orders`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/api/orders` | Place a new order | ✅ |
| `GET` | `/api/orders/me` | Get logged-in user's orders | ✅ |
| `GET` | `/api/orders/:id` | Get specific order details | ✅ |

**Request Body — Place Order:**
```json
{
  "items": [
    { "foodId": "64abc...", "name": "Margherita Pizza", "quantity": 2, "price": 299 }
  ],
  "totalAmount": 598,
  "paymentMethod": "UPI",
  "address": "123 Main Street, Bengaluru"
}
```

---

## ▶️ Running the Project

### Start the Backend Server

```bash
cd server
npm run dev
```

The Express server will start at **`http://localhost:5000`**

### Start the Frontend Dev Server

```bash
cd client
npm run dev
```

The React app will start at **`http://localhost:5173`**

### Run Both Simultaneously (from root)

If you set up a `concurrently` script in root `package.json`:

```bash
npm run dev
```

> 💡 Make sure MongoDB is running (locally or Atlas URI is set in `.env`) before starting the backend.

---

## 📸 Screenshots

> Replace placeholders below with actual screenshots of your app.

### 🏠 Home Page
![Home Page Screenshot](https://via.placeholder.com/800x450/1a1a2e/ffffff?text=🏠+Home+Page+—+ADD+SCREENSHOT+HERE)

### 🍕 Food Menu
![Food Menu Screenshot](https://via.placeholder.com/800x450/1a1a2e/ffffff?text=🍕+Food+Menu+—+ADD+SCREENSHOT+HERE)

### 🛒 Cart Page
![Cart Page Screenshot](https://via.placeholder.com/800x450/1a1a2e/ffffff?text=🛒+Cart+Page+—+ADD+SCREENSHOT+HERE)

### 💳 Payment Page
![Payment Page Screenshot](https://via.placeholder.com/800x450/1a1a2e/ffffff?text=💳+Payment+Page+—+ADD+SCREENSHOT+HERE)

### 👤 Profile & Order History
![Profile Screenshot](https://via.placeholder.com/800x450/1a1a2e/ffffff?text=👤+Profile+Page+—+ADD+SCREENSHOT+HERE)

---

## 🔮 Future Improvements

- [ ] 🛡️ **Admin Panel** — Full dashboard for managing menu items, users, and orders
- [ ] 💬 **Real-time Order Tracking** — Live status updates using Socket.io
- [ ] 🗺️ **Google Maps Integration** — Live delivery location tracking
- [ ] 💳 **Razorpay / Stripe Integration** — Real payment gateway support
- [ ] ⭐ **Ratings & Reviews** — Allow users to rate dishes after delivery
- [ ] 🌍 **Multi-restaurant Support** — Onboard multiple restaurant partners
- [ ] 📧 **Email Notifications** — Order confirmation and delivery alerts via Nodemailer
- [ ] 🌙 **Dark Mode** — Toggle between light and dark themes
- [ ] 📱 **React Native App** — Extend to a mobile application

---

## 👨‍💻 Author

<div align="center">

**Your Name**

[![GitHub](https://img.shields.io/badge/GitHub-yourusername-181717?style=for-the-badge&logo=github)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yourname-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/yourname)
[![Portfolio](https://img.shields.io/badge/Portfolio-yourwebsite.com-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yourwebsite.com)

</div>

---

<div align="center">

If you found this project helpful, please consider giving it a ⭐ — it means a lot!

*Built with ❤️ using the MERN Stack*

</div>
