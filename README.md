<div align="center">

# 🛡️ Aegis
### Secure Auth That Feels Alive

**A full-stack MERN authentication system with JWT sessions, bcrypt-hashed passwords, and role-based access control — wrapped in a glassmorphism UI over full-screen video backgrounds.**
No plain login form here: a single card handles both sign-in and sign-up, floating over a looping waterfall on the way in and a different scene once you're through the gate.

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

</div>

---

## 🖼️ Preview

> *(Drop a screenshot of the login card and dashboard here — drag a PNG into this file on GitHub)*

![Aegis Preview](frontend/public/preview.png)

---

## 🧩 What Is Aegis?

**Aegis** is a secure authentication system built around a simple idea: the gate into an app should feel as considered as the app itself.

Instead of two separate login and signup pages, Aegis uses **one glass card with a pill toggle** — flip between "Log In" and "Sign Up" instantly, no navigation, no reload. The card floats over a full-screen looping video, offset to one side of the screen so the scenery stays the star. Once authenticated, the dashboard carries the same visual language over a second video, so the whole experience feels like one continuous space rather than a form bolted onto a template.

Under the hood, it's a properly secured MERN application: passwords are hashed with bcrypt before they ever touch the database, sessions are handled with signed JWTs, and routes are protected on both the API (middleware) and the client (route guards) — with a working role-based access layer distinguishing regular users from admins.

---

## ✨ Features

### 🔐 Core Authentication
- Registration and login with bcrypt-hashed passwords (never stored in plain text)
- JWT-based sessions, persisted client-side and auto-attached to every API request
- Protected routes enforced server-side (middleware) and client-side (route guards)
- Role-based access control (`user` / `admin`) with a dedicated admin-only endpoint

### 🎨 Experience
- Combined login/signup card with an animated mode toggle — zero page reloads
- Glassmorphism styling — frosted blur, translucent surface, soft border and shadow
- Full-screen looping video backgrounds, distinct for the auth page and the dashboard
- Show/hide password toggle
- Fully responsive — the card re-centers gracefully on small screens

### ⚙️ Engineering
- REST API with proper error handling and status codes
- Mongoose schema validation, unique email constraint, pre-save password hashing hook
- Environment-variable driven config, `.env` excluded from version control
- Clean separation of concerns (routes / controllers / models / middleware)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 · Vite · React Router · Axios · plain CSS (no UI framework) |
| **Backend** | Node.js · Express · Mongoose |
| **Database** | MongoDB (Atlas) |
| **Auth** | JSON Web Tokens · bcryptjs |

---

## 📂 Project Structure
```
PRODIGY_FS_01/
├── backend/                     # Express + MongoDB REST API
│   ├── config/db.js
│   ├── controllers/authController.js
│   ├── middleware/authMiddleware.js
│   ├── models/User.js
│   ├── routes/authRoutes.js
│   ├── routes/protectedRoutes.js
│   ├── server.js
│   └── .env.example
└── frontend/                    # React (Vite) client
    ├── public/
    │   ├── auth-bg.mp4
    │   └── dashboard-bg.mp4
    └── src/
        ├── api/axios.js
        ├── context/AuthContext.jsx
        ├── components/ProtectedRoute.jsx
        ├── pages/AuthPage.jsx
        ├── pages/Dashboard.jsx
        ├── App.jsx
        ├── index.css
        └── main.jsx
```

---

## 🎨 Design Direction

| Element | Choice |
|---|---|
| **Name** | *Aegis* — a shield in Greek mythology; a gate that protects what's behind it |
| **Palette** | Deep video-scene backdrop · frosted white glass overlay · soft coral error state |
| **Layout** | Auth card offset to the right of the frame; dashboard card centered — the video does the talking on the sides |
| **Signature Element** | The glass card itself — a single reusable surface that adapts between login, signup, and the authenticated dashboard |

---

## 📊 Project Status

| Area | Status |
|---|---|
| Backend API — register, login, `/me`, error handling | ✅ Done |
| Password hashing (bcrypt) | ✅ Done |
| JWT session issuing & verification middleware | ✅ Done |
| Role-based access control (`user` / `admin`) | ✅ Done — tested with both roles |
| Frontend — combined auth card, protected route guard | ✅ Done |
| Glassmorphism UI + video backgrounds | ✅ Done |
| Responsive layout (mobile → desktop) | ✅ Done |
| Deployment | ⏳ Optional — not required for this task |

---

## 🚀 Run It Locally

### 1. Backend
```bash
cd backend
npm install
cp .env.example .env       # fill in your real MONGO_URI and JWT_SECRET
npm run dev                 # → http://localhost:5000
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev                  # → http://localhost:5173
```

### API Endpoints

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Log in and receive a JWT | No |
| GET | `/api/auth/me` | Get the current logged-in user | Yes |
| GET | `/api/protected/dashboard` | Sample protected route | Yes |
| GET | `/api/protected/admin` | Admin-only route | Yes (`admin` role) |

### Testing Role-Based Access
New accounts default to `role: "user"`. To test the admin route, update a user's role directly in MongoDB:
```js
db.users.updateOne({ email: "you@example.com" }, { $set: { role: "admin" } })
```
Log out and back in, then call `/api/protected/admin` with the JWT in the `Authorization: Bearer <token>` header. A `user`-role account hitting the same route receives a `403 Forbidden`.

---

## 🔮 Next Steps

1. Add real screenshots of the login card and dashboard
2. Optional: deploy backend to Render and frontend to Vercel for a live demo link
3. Optional bonus polish: "forgot password" flow, email verification

---

## 📄 License

MIT — open source and free to use.

---

<div align="center">
  Built for the Full-Stack Web Development Internship at Prodigy InfoTech 🛡️<br/>
  by <a href="https://github.com/Aditya-dxt">Aditya Dixit</a>
</div>