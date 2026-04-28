# 🚀 BlogAppNodeJS - Advanced Blogging API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

A robust, scalable, and fully typed RESTful API for a modern blog application. Built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**, this project provides a comprehensive backend solution for managing users, posts, comments, and interactions.

---

## 🌟 Features

- **🔐 Secure Authentication**: 
  - User and Admin registration and login.
  - Role-based access control using JSON Web Tokens (JWT).
- **📝 Post Management**:
  - Full CRUD (Create, Read, Update, Delete) operations for blog posts.
  - Image support (placeholder) and descriptions.
- **💬 Interactive Social Features**:
  - Comment system: Users can add, update, and delete comments on posts.
  - Like system: Users can like and unlike posts.
- **🛡️ Admin Dashboard Backend**:
  - Admin-only routes for user management.
  - Filter management system for content categorization.
- **🛠️ Developer-Friendly**:
  - Written in TypeScript for type safety and better DX.
  - Organized project structure (Models, Routes, Services, Middleware).
  - Hot-reloading with Nodemon and ts-node.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (via Mongoose)
- **Security**: JSON Web Token (JWT)
- **Development Tools**: Nodemon, ts-node

---

## 📂 Project Structure

```text
src/
├── index.ts              # Application entry point
├── middelware/           # JWT & Role-based authentication logic
├── models/               # Mongoose schemas (User, Post, Filter)
├── routes/               # API endpoint definitions
└── services/             # Business logic & Database operations
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Running locally or on Atlas)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ahmedGHtarek0/BlogAppNodjs.git
   cd BlogAppNodjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure the database**:
   - The project is configured to connect to `mongodb://localhost:27017/BlogApp` by default in `src/index.ts`. Ensure your MongoDB service is running.

4. **Run the application**:
   - For development:
     ```bash
     npm run dev
     ```
   - The server will start at `http://localhost:3000`.

---

## 🛣️ API Endpoints

### Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/auth/registerUser` | Register a new user |
| `POST` | `/auth/registerAdmin` | Register a new admin (Admin required) |
| `POST` | `/auth/login` | Login and receive JWT token |

### Post Management
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/Post/addpost` | Create a new blog post |
| `DELETE` | `/Post/deletepost/:id` | Delete a post by ID |
| `PUT` | `/Post/updatepost/:id` | Update post content/filters |
| `POST` | `/Post/addlike/:idpost` | Like a post |
| `POST` | `/Post/deletelike/:idpost`| Unlike a post |

### Comment Management
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/Post/addcomment/:id` | Add a comment to a post |
| `PUT` | `/Post/update/:idpost/:idcomment` | Update a comment |
| `DELETE` | `/Post/deletecomment/:idpost/:idcomment` | Remove a comment |

### Admin Operations
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/Admin/addfilter` | Create a new content filter |
| `DELETE` | `/Admin/deleteusers/:id` | Remove a user from the platform |

---

## 📜 License

Distributed under the **ISC License**.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact

**Ahmed Tarek** - [GitHub](https://github.com/ahmedGHtarek0)

Project Link: [https://github.com/ahmedGHtarek0/BlogAppNodjs](https://github.com/ahmedGHtarek0/BlogAppNodjs)
