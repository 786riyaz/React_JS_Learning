# React Router – Core Components Explained

This document explains the fundamental components of **React Router (v6+)** with clear definitions and examples.

---

## 1. BrowserRouter

- Main wrapper component that keeps your UI in sync with the URL in the browser.
- Uses the **HTML5 History API** (`pushState`, `popState`) to handle navigation.
- All routes should be wrapped inside it.

### Example

```jsx
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>My React App</h1>
    </BrowserRouter>
  );
}
```

---

## 2. Routes

* Container for all your `<Route>` components.
* Responsible for rendering the appropriate component based on the current URL.
* Looks through the list of routes and renders the **first matching route**.

### Example

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 3. Route

* Defines a mapping between a **URL path** and a **React component**.
* Uses:

  * `path` → URL path
  * `element` → component to render

### Example

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

### Behavior

* `http://localhost:3000/` → **Home** component is rendered
* `http://localhost:3000/about` → **About** component is rendered

---

## 4. Link

* Works like an `<a>` tag, but **without reloading the page**.
* Updates the URL and lets React Router handle navigation.
* Prevents full page refresh (Single Page Application navigation).

### Example

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link>
    </nav>
  );
}
```

---

## 🔥 Full Working Example

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## 👉 In Short

* **BrowserRouter**: Enables client-side routing using the browser’s history API.
* **Routes**: Renders the appropriate component based on the current URL.
* **Route**: Defines `path → component` mapping.
* **Link**: Navigates between pages without refreshing the page.

---

## Best Practice

* `BrowserRouter` must be at the **top level** of your application.
* The best practice is to wrap it in `main.jsx` around the `<App />` component.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```