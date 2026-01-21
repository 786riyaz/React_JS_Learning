## How to create **secure (protected) routes** in React

Secure routes ensure that **only authenticated (and optionally authorized) users** can access certain pages (e.g., dashboard, admin, profile).

Below is the **industry-standard approach** used in real React applications and expected in interviews.

---

## 1. What “secure routes” actually mean

A route is considered secure when:

* User **must be authenticated** to access it
* Optionally, user **must have a specific role/permission**
* Unauthorized users are **redirected** (usually to login)

Security is enforced at **two levels**:

1. **Frontend (React routing)** → UX & access control
2. **Backend (API authorization)** → Actual security (mandatory)

> Frontend protection alone is **not real security**; backend validation is required.

---

## 2. Core building blocks

You need:

1. Authentication state (is user logged in?)
2. Token/session storage
3. A protected route wrapper
4. API-level authorization

---

## 3. Step-by-step: Protected routes using React Router

### Step 1: Store authentication state

Common options:

* React Context (most common)
* Redux / Zustand
* Auth library (Auth0, Firebase, etc.)

Example (simplified):

```jsx
export const AuthContext = React.createContext(null);
```

```jsx
function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

---

### Step 2: Create a ProtectedRoute component

```jsx
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function ProtectedRoute() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
```

**What this does**

* If user is not logged in → redirect to login
* If logged in → allow access

---

### Step 3: Use it in your route configuration

```jsx
<Routes>
  <Route path="/login" element={<Login />} />

  <Route element={<ProtectedRoute />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
  </Route>
</Routes>
```

Now:

* `/dashboard` → accessible only if authenticated
* `/login` → public

---

## 4. Role-based secure routes (Admin / User)

### Extend ProtectedRoute with roles

```jsx
function ProtectedRoute({ allowedRoles }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
```

### Usage

```jsx
<Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
  <Route path="/admin" element={<AdminDashboard />} />
</Route>
```

---

## 5. Token handling (VERY IMPORTANT)

### Where to store tokens?

| Storage               | Recommendation      |
| --------------------- | ------------------- |
| `localStorage`        | ❌ vulnerable to XSS |
| `sessionStorage`      | ❌ still vulnerable  |
| **HTTP-only cookies** | ✅ best practice     |

**Best approach**

* Store JWT in **HTTP-only cookie**
* Browser sends token automatically
* JS cannot access it

---

## 6. Protecting API routes (mandatory)

Even with protected React routes, **APIs must validate tokens**.

Frontend:

```js
fetch("/api/data", {
  credentials: "include" // for cookies
});
```

Backend:

* Verify JWT / session on every request
* Check user role/permissions

> Never trust frontend route protection alone.

---

## 7. Common mistakes (interview red flags)

❌ Only hiding UI components
❌ Using index routes for security
❌ Trusting localStorage tokens blindly
❌ Not protecting backend APIs
❌ Redirect loops due to bad auth checks

---

## 8. Interview-ready answer (structured)

> *To create secure routes in React, I maintain authentication state using context or state management, wrap protected routes with a guard component that checks authentication and roles, and redirect unauthorized users to login. For real security, I store tokens securely—preferably in HTTP-only cookies—and always validate authorization on the backend APIs.*

---

## 9. Variations interviewers may ask about

You should be ready to explain:

* Secure routes with JWT vs sessions
* Secure routes in SSR apps (Next.js middleware)
* Token refresh & silent re-auth
* Preventing flash of protected content
* Logout handling and route invalidation

If you want, I can next explain:

* Secure routes in **Next.js (App Router + middleware)**
* JWT vs session-based authentication
* How to prevent unauthorized API access
* Real interview questions & answers on route security
