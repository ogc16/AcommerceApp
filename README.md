# Open Source E-Commerce App

## 🚀 Overview

An open-source, full-featured eCommerce application built with modern web technologies. This app supports product listing, user authentication, shopping cart, checkout, and order management.

## ✨ Features

- 🛒 Product catalog with categories & search
- 🔐 User authentication (signup/login/logout)
- 🛍️ Shopping cart & checkout system
- 💳 Payment gateway integration (Stripe, PayPal, etc.)
- 📦 Order management & tracking
- 📊 Admin dashboard for product & order management
- 📱 Fully responsive design

## 🛠️ Tech Stack

- **Frontend:** React Native
- **Backend:** Node.js, Express, Strapi
- **Database:** MongoDB
- **Authentication:** JWT-based authentication
- **Deployment:** Vercel, Docker

## 📌 Installation

### Prerequisites

Ensure you have the following installed:

- Node.js & npm
- MongoDB
- Docker (optional, for containerization)

### Steps

```sh
# Clone the repository
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app

# Install dependencies
npm install

# Set up environment variables (create a .env file and add required variables)
cp .env.example .env

# Start the backend
cd backend
npm run dev

# Start the frontend
cd ../frontend
npm run start
```

The application will be available on your emulator or connected device.

## 🔑 Environment Variables

```sh
# Backend
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key

# Frontend
API_URL=http://localhost:5000/api
```

## 🤝 Contribution

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 📧 Contact

For any issues or feature requests, open an issue or reach out at [your-email@example.com](mailto:your-email@example.com).

