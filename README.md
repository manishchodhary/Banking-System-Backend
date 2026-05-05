# Banking-System-Backend

#  Banking System Backend

A secure and scalable banking system backend built using **Node.js**, **Express**, and **MongoDB**.
This project provides RESTful APIs for managing users, accounts, and transactions.

---

## Features

*  User Authentication (JWT-based)
*  User Registration & Login
*  Account Management
*  Deposit & Withdrawal
*  Fund Transfer between accounts
*  Transaction History
*  Secure Cookies for authentication
*  Scalable backend architecture

---

##  Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas)
* **Authentication:** JWT (JSON Web Token)
* **Security:** bcrypt, HTTP-only cookies

---

## 📂 Project Structure

```
banking-system-backend/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── utils/
│── server.js
│── package.json
```

---

##  Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/banking-system-backend.git
cd banking-system-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

```bash
npm run dev
```

---

##  API Endpoints

### Auth Routes

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user

### Account Routes

* `GET /api/account` → Get account details
* `POST /api/account/deposit` → Deposit money
* `POST /api/account/withdraw` → Withdraw money

### Transaction Routes

* `POST /api/transaction/transfer` → Transfer money
* `GET /api/transaction/history` → Transaction history

---

##  Security

* Password hashing using **bcrypt**
* JWT authentication
* HTTP-only cookies
* Environment variables for sensitive data

---

##  Author

**Manish**

