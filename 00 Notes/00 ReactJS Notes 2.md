# 📘 React JS – Complete Revision Notes

*(Vite + Modern React)*

---

## 1️⃣ What is React?

**React** is a **component-based JavaScript library** for building **fast, interactive user interfaces**.

### Core Principles

* Declarative UI
* Component-driven architecture
* Unidirectional data flow
* Virtual DOM for performance

---

## 2️⃣ Project Setup with Vite

### Why Vite?

* Faster dev server
* Native ES modules
* Minimal configuration

### Project Flow

```text
index.html → main.jsx → App.jsx
```

### File Responsibilities

* **index.html**: Entry HTML file
* **main.jsx**: React bootstrap file
* **App.jsx**: Root component

```jsx
// main.jsx
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
```

---

## 3️⃣ JSX (JavaScript XML)

JSX allows writing **HTML-like syntax inside JavaScript**.

### Rules of JSX

* Must return a **single parent element**
* Use `className` instead of `class`
* Expressions inside `{}`

```jsx
const name = "Riyaz";
<h1>Hello {name}</h1>
```

---

## 4️⃣ Components

### Types of Components

| Type                  | Status        |
| --------------------- | ------------- |
| Class Components      | Legacy        |
| Functional Components | ✅ Recommended |

### Functional Component

```jsx
function Test() {
  return <div>Hello</div>;
}

export default Test;
```

### Rules

* One **default export** per file
* Multiple **named exports** allowed

```js
import A, { B } from "./MyComponent";
```

---

## 5️⃣ Props (Component Communication)

Props are **read-only inputs** passed to components.

### Passing Props

```jsx
<AddUser user={user} setUser={setUser} />
```

### Receiving Props

```jsx
function AddUser({ user, setUser }) {
  return <div>{user.name}</div>;
}
```

### Default Props

```jsx
function User({ name = "Riyaz", age = 25 }) {
  return <p>{name} - {age}</p>;
}
```

---

## 6️⃣ Children Props

Used for **component composition**.

```jsx
<GreenWrapper>Content</GreenWrapper>
```

```jsx
function GreenWrapper({ children }) {
  return <div style={{ color: "green" }}>{children}</div>;
}
```

---

## 7️⃣ State Management – `useState`

State stores **mutable data** that causes re-render on update.

```jsx
const [count, setCount] = useState(0);
```

### Rules

* Do not mutate state directly
* Updates are asynchronous
* Triggers re-render

```jsx
setCount(prev => prev + 1);
```

---

## 8️⃣ Derived State

State computed from **existing state or props**.

```js
const fullName = firstName + " " + lastName;
```

Avoid storing derived values in state unless required.

---

## 9️⃣ Event Handling

```jsx
<input onChange={(e) => setName(e.target.value)} />
```

### Notes

* Events are synthetic (cross-browser)
* Always use callback functions

---

## 🔟 Inline Styling & CSS

```jsx
<div style={{ textAlign: "center" }}></div>
```

### Options

* Inline styles
* CSS files
* CSS modules
* Styled Components

---

## 1️⃣1️⃣ Local Storage

Used for **persistent client-side storage**.

```js
localStorage.setItem("key", JSON.stringify(data));
```

```js
const localData = JSON.parse(localStorage.getItem("key"));
```

---

## 1️⃣2️⃣ useEffect Hook

Handles **side effects**.

### Types of useEffect

#### On Mount

```js
useEffect(() => {
  fetchData();
}, []);
```

#### On Dependency Change

```js
useEffect(() => {
  updateUI();
}, [users]);
```

#### On Every Render (Avoid Usually)

```js
useEffect(() => {
  console.log("Rendered");
});
```

---

## 1️⃣3️⃣ useRef Hook

Accesses **DOM elements** without re-render.

```js
const inputRef = useRef();
```

```jsx
<input ref={inputRef} />
```

```js
inputRef.current.focus();
```

### Use Cases

* Focus management
* DOM manipulation
* Mutable values

---

## 1️⃣4️⃣ Rendering Lists

```jsx
{students.map((s, index) => (
  <li key={index}>{s.name}</li>
))}
```

### Key Rules

* `key` must be unique
* Avoid index as key if list changes

---

## 1️⃣5️⃣ useReducer

Used for **complex state logic**.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

```js
dispatch({ type: "INCREMENT" });
```

### When to use

* Multiple state transitions
* Predictable state updates

---

## 1️⃣6️⃣ Context API

Solves **prop drilling**.

```js
const AppContext = createContext();
```

```jsx
<AppContext.Provider value={data}>
  <Child />
</AppContext.Provider>
```

```js
const data = useContext(AppContext);
```

---

## 1️⃣7️⃣ React Router (SPA Navigation)

### Installation

```bash
npm i react-router
```

### Basic Routing

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
</BrowserRouter>
```

### URL Params

```js
const params = useParams();
```

### Fallback Route

```jsx
<Route path="/*" element={<Navigate to="/" />} />
```

---

## 1️⃣8️⃣ API Calls (Fetch)

### GET

```js
const res = await fetch(url);
const data = await res.json();
```

### POST

```js
await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});
```

---

## 1️⃣9️⃣ Lazy Loading & Code Splitting

Improves performance by loading components **on demand**.

```js
const User = lazy(() => import("./User"));
```

```jsx
<Suspense fallback={<Loader />}>
  <User />
</Suspense>
```

---

## 2️⃣0️⃣ Concurrent & Modern React Hooks

### `useTransition`

Used for **non-blocking updates**.

```js
const [pending, startTransition] = useTransition();
```

### `useActionState`

Used in **form-based async actions**.

```js
const [data, action, pending] = useActionState(handleSubmit);
```

### `useFormStatus`

Tracks form submission state.

```js
const { pending } = useFormStatus();
```

---

## 2️⃣1️⃣ Artificial Delay (Testing)

```js
await new Promise(res => setTimeout(res, 5000));
```

---

## 2️⃣2️⃣ Styled Components

CSS-in-JS styling approach.

```js
import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: white;
`;
```

---

## 2️⃣3️⃣ Controlled vs Uncontrolled Components

| Controlled           | Uncontrolled       |
| -------------------- | ------------------ |
| useState             | useRef             |
| React controls input | DOM controls input |

---

## 2️⃣4️⃣ Best Practices

* Keep components small
* Avoid unnecessary state
* Prefer composition over inheritance
* Use keys properly
* Avoid prop drilling (use context)
* Separate UI & logic

---

## 2️⃣5️⃣ Mental Model Summary

```text
UI = f(State, Props)
State change → Re-render → Virtual DOM diff → Real DOM update
```