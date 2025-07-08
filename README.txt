 🛒 Groceasy – Your Smart Grocery Shopping Companion 🥦✨

Groceasy is a full-featured grocery shopping platform built with the MERN stack (MongoDB, Express.js, React, and Node.js). It’s designed to simplify everyday grocery needs for both customers and store owners. Whether you’re restocking your pantry or managing product listings as a seller, Groceasy offers a seamless and efficient experience from start to checkout.

Customers can browse a variety of grocery items, add them to their cart, and place orders with secure Stripe-powered payments. Sellers can easily manage product inventories, view orders, and track customer interactions. With real-time cart updates, intuitive search, and responsive design, Groceasy ensures users have full control wherever they are.

From local convenience stores to busy households, Groceasy empowers everyone to shop smarter and faster. It brings convenience, clarity, and control into the grocery ecosystem with one powerful platform.

--------------------------------------------------------------------------------------------------------------------------------

🔥 Key Features

👤 For Customers

🛕️ Easy Product Browsing – Clean UI to explore all categories
🛒 Smart Cart System – Real-time updates and item tracking
💳 Secure Payments – Stripe integration for a safe checkout
📦 Order Tracking – View and track placed orders
🔍 Search Functionality – Quickly find products by name

🛒 For Sellers

📦 Product Management – Add, edit, and delete listings
📊 Order Dashboard – See pending, shipped, and delivered orders
📸 Image Upload – Upload item images using **Cloudinary**
⚙️ Seller Login – Secure authentication and access control

--------------------------------------------------------------------------------------------------------------------------------


🛠️ Tech Stack

⚛️ Frontend

React.js (with Context API for global state)
Tailwind CSS (responsive and modern UI design)

🖙 Backend

Node.js & Express.js (RESTful APIs)
MongoDB with Mongoose (NoSQL database)
Stripe API (secure checkout experience)
Cloudinary API (media storage and CDN)

--------------------------------------------------------------------------------------------------------------------------------


🔧 Installed Dependencies

Frontend Essentials

* axios – For API requests
* react-router-dom – Routing across pages
* react-icons – Icon support
* framer-motion – Animations
* tailwindcss – Styling framework

Backend Core

* express – Server framework
* mongoose – MongoDB ODM
* cors – Cross-Origin requests
* stripe – Payment processing
* dotenv – Environment variables
* multer + cloudinary – File uploads & media storage

Dev Tools

* nodemon – Development watcher
* eslint – Code quality

--------------------------------------------------------------------------------------------------------------------------------


 ▶️ How to Run the Groceasy Project

📅 Clone the Repository

git clone https://github.com/kithvin/Groceasy.git
cd Groceasy

 ⚙️ Backend Setup

cd backend
npm install
# Create a .env file with:
# MONGODB_URI=""
# CLOUDINARY_API_KEY=""
# STRIPE_SECRET_KEY=""
# JWT_SECRET=""
npm run dev


⚙️ Frontend Setup

cd ../frontend
npm install
# Create a .env file with:
# VITE_API_BASE_URL="http://localhost:5000"
npm run dev


--------------------------------------------------------------------------------------------------------------------------------


🌐 Deployment

The project is live at: [https://groceezy-kithvins-projects.vercel.app/) 


--------------------------------------------------------------------------------------------------------------------------------

⚙️ Env File

* Frontend 

# Currency
VITE_CURRENCY = '$'

# Backend URL
VITE_BACKEND_URL =  "http://localhost:5000"

* Backend

# Secret key used for signing and verifying JWT tokens
JWT_SECRET="secret#text"

# Application running mode
NODE_ENV = "development"

# Admin Credentials
SELLER_EMAIL = "admin@example.com"
SELLER_PASSWORD = "admin1234"

# MongoDB connection string
MONGODB_URI = "mongodb+srv://Admin:1234@groceezy-cluster.6ibl4pn.mongodb.net/?retryWrites=true&w=majority&appName=Groceezy-Cluster"

# Cloudinary
CLOUDINARY_CLOUD_NAME = 'dc3ysm7sq'
CLOUDINARY_API_KEY = '226853749731742'
CLOUDINARY_API_SECRET = 'qLdBTTMPwZQC2gxluJcU-zh5A64'


