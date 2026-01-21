🔐 Auth System Pro (Production-Ready Authentication API)

A secure, production-grade authentication system built with Node.js, Express, MongoDB, and JWT, implementing modern authentication best practices such as HttpOnly cookies, access & refresh tokens, and protected routes.

🚀 Features

✅ User Registration & Login

🔒 Secure Password Hashing (bcrypt)

🔑 JWT Authentication (Access + Refresh Tokens)

🍪 HttpOnly Cookie-based Token Storage (XSS-safe)

♻️ Refresh Token Rotation

🛡 Protected Routes using Middleware

🚪 Logout Functionality

🧱 Centralized Error Handling

📁 Clean & Scalable Project Structure

🧠 Authentication Strategy (Important)
Token Type	Purpose	Expiry	Storage
Access Token	API authorization	15 minutes	HttpOnly Cookie
Refresh Token	Generate new access token	7 days	HttpOnly Cookie

This approach:

Prevents XSS attacks

Avoids localStorage risks

Matches real-world production systems

🏗️ Project Structure
auth-system-pro/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── user.routes.js
│   ├── models/
│   │   └── user.model.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   ├── utils/
│   │   └── generateToken.js
│   └── app.js
├── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md

⚙️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: JWT (jsonwebtoken)

Security: bcrypt, HttpOnly cookies

Tools: Nodemon, dotenv

🔧 Setup & Installation
1️⃣ Clone Repository
git clone https://github.com/your-username/auth-system-pro.git
cd auth-system-pro

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret


⚠️ Never commit .env to GitHub

4️⃣ Run Server
npm run dev


Server runs at:

http://localhost:5000

🔐 API Endpoints
🔹 Register User
POST /api/auth/register

{
  "name": "Prajot",
  "email": "test@example.com",
  "password": "password123"
}

🔹 Login User
POST /api/auth/login


✔ Sets accessToken & refreshToken as HttpOnly cookies

🔹 Refresh Access Token
POST /api/auth/refresh


✔ Uses refresh token cookie
✔ Issues new access token

🔹 Protected Route Example
GET /api/users/profile


Requires valid access token.

🔹 Logout
POST /api/auth/logout


✔ Clears authentication cookies

🛡 Security Practices Used

Password hashing with bcrypt

Short-lived access tokens

Refresh token rotation

HttpOnly cookies (XSS protection)

Role-ready user model

Centralized error handling

No sensitive data exposure

🎯 Interview-Ready Explanation

“This authentication system uses short-lived JWT access tokens stored in HttpOnly cookies for secure API access. Refresh tokens are used to silently renew access tokens, preventing session hijacking and XSS attacks.”

📌 Future Improvements

Role-based access control (RBAC)

Email verification

Password reset (Forgot password)

Rate limiting

OAuth (Google/GitHub login)

👤 Author

Prajot Magadum
Computer Science Engineering Student
Backend & Full-Stack Development Enthusiast
