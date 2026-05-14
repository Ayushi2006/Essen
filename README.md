<div align="center">

# 🍽️ Essen — Food Delivery App

### *Delicious food, delivered fast.*

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-Vite-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT Auth](https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<br/>

> **Essen** *(German for "to eat")* is a full-stack food delivery web application I built while learning the MERN stack. It has features like JWT auth, a cart system, fake payment flow, and order tracking, all wrapped in a glassmorphism-inspired UI.

<br/>


</div>

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| ⚛️ React (Vite) | UI framework with fast HMR (Hot Module Replacement) |
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

- 🔐 **User Authentication** — Signup & Login with JWT tokens and bcrypt password hashing
- 🍕 **Food Listings** — Food items fetched dynamically from MongoDB via REST API
- 🔍 **Search Functionality** — Real-time dish search with instant filtering
- 🛒 **Cart System** — Add/remove items with cart state managed via React Context
- ➕➖ **Quantity Control** — Increment and decrement item quantities directly in cart
- 💰 **Price Calculation** — Auto-calculated total that updates as you modify the cart
- 💳 **Payment Page** — UI for UPI, Credit/Debit Card, and Cash on Delivery (no real gateway)
- 📦 **Order Management** — Orders saved to MongoDB and viewable from your profile
- 👤 **Profile Dashboard** — See your order history and current order status
- 📱 **Responsive UI** — Works on all screen sizes, built with a glassmorphism aesthetic

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

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas URI)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Ayushi2006/essen-food-delivery.git
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

Create a `.env` file inside the `/server` directory (see [Environment Variables](#-environment-variables) below).

---

## 🔑 Environment Variables

Create a `.env` file in the `/server` directory:

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

> ⚠️ **Don't commit your `.env` file.** It's already in `.gitignore`.

If you want to configure the API base URL on the frontend, create a `.env` in `/client`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 📡 API Reference

### 🔐 Auth Routes — `/api/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/api/auth/register` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Login and receive JWT token | ❌ |
| `GET` | `/api/auth/me` | Get current logged-in user | ✅ |

**Request Body — Register / Login:**
```json
{
  "name": "Ayushi",
  "email": "ayushi@example.com",
  "password": "securepassword123"
}
```

---

### 🍕 Food Routes — `/api/food`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/api/food` | Get all food items | ❌ |
| `GET` | `/api/food/:id` | Get a single food item | ❌ |
| `POST` | `/api/food` | Add a new food item | ✅ |
| `DELETE` | `/api/food/:id` | Delete a food item | ✅ |

---

### 📦 Order Routes — `/api/orders`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/api/orders` | Place a new order | ✅ |
| `GET` | `/api/orders/me` | Get your order history | ✅ |
| `GET` | `/api/orders/:id` | Get a specific order | ✅ |

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

### Start the Backend

```bash
cd server
npm run dev
```

Server runs at **`http://localhost:5000`**

### Start the Frontend

```bash
cd client
npm run dev
```

React app runs at **`http://localhost:5173`**

### Run Both at Once (from root)

If you have `concurrently` set up in the root `package.json`:

```bash
npm run dev
```

> 💡 Make sure your MongoDB connection is working before starting the backend.

---

## 🔮 Future Improvements

These are things I want to add eventually:

- [ ] 🛡️ **Admin Panel** — Manage food items, users, and orders from a dashboard
- [ ] 💬 **Real-time Order Tracking** — Live updates using Socket.io
- [ ] 🗺️ **Map Integration** — Show delivery location on a map
- [ ] 💳 **Real Payment Gateway** — Integrate Razorpay or Stripe
- [ ] ⭐ **Ratings & Reviews** — Let users rate dishes after ordering
- [ ] 📧 **Email Notifications** — Send order confirmation emails via Nodemailer
- [ ] 🌙 **Dark Mode** — Add a proper dark/light toggle
- [ ] 📱 **Mobile App** — Maybe a React Native version someday

---

## 👩‍💻 Author

<div align="center">

**Ayushi**

*CSE Student | AI & ML Specialization | BS Data Science @ IIT Madras*

[![GitHub](https://img.shields.io/badge/GitHub-Ayushi2006-181717?style=for-the-badge&logo=github)](https://github.com/Ayushi2006)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ayushi_R-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ayushi-r/)
[![Email](https://img.shields.io/badge/Email-ayushi.rajak11@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ayushi.rajak11@gmail.com)

</div>

---

<div align="center">

If this was helpful, a ⭐ would mean a lot. Still figuring things out, one project at a time 🙃

</div>
