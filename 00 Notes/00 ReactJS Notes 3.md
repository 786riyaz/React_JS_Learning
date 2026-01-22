# 📘 React JS – Complete Revision Notes (Vite + Modern React)

---

## ⚙️ Project Setup (Vite)

* **Development Server Port:** `5173`
* **React Latest Version:** `19.1.1`

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

## 📂 Folder & Path Basics

* `./` → Current folder or directory

---

## 📦 Imports & Basic Hooks

```js
import { useState } from 'react'
import Header from './Header'
import './App.css'
import './css/style.css'
```

---

## 🧠 What is React?

**React** is a **component-based JavaScript library** for building **fast, interactive user interfaces**.

### Core Principles

* Declarative UI
* Component-driven architecture
* Unidirectional data flow
* Virtual DOM for performance

---

## 🧩 JSX (JavaScript XML)

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

## 🧱 Components

### Types of Components

| Type                  | Status        |
| --------------------- | ------------- |
| Class Components      | Legacy        |
| Functional Components | ✅ Recommended |

### Functional Component Example

```jsx
function Test() {
  return (<div>...</div>)
}

export default Test;
```

### Rules

* Only **one default export** per file
* Named exports are allowed

```js
import A, { B } from './MyComponent'
// A → Default Component
// B → Named Component
```

---

## 📤 Named Exports

```js
export const UserKey = "786";

export function Profile() {
  return (<div>...</div>)
}
```

---

## 📥 Props (Component Communication)

Props are **read-only inputs** passed to components.

### Passing Props

```jsx
<AddUser user={user} setUser={setUser} />
```

### Receiving Props

```jsx
function AddUser({ user, setUser }) {
  return (<div>...</div>)
}
```

### Default Props

```jsx
function User({ name = "Riyaz", age = 25 }) {
  return (<div>{name} --- {age}</div>)
}
```

---

## 👶 Children Props

```jsx
<GreenWrapper>Test 1</GreenWrapper>
```

```jsx
function GreenWrapper({ children }) {
  return (
    <div style={{ /* ... */ }}>
      <b>{children}</b>
    </div>
  )
}
```

---

## 🔁 State Management – useState

```js
const [count, setCount] = useState(0);
const [color, setColor] = useState("Red");
```

### Rules

* Do not mutate state directly
* Updates are asynchronous
* Triggers re-render

```js
setCount(prev => prev + 1);
```

---

## 🧠 Derived State

State computed from existing state or props.

```js
const fullName = firstName + " " + lastName;
```

Avoid storing derived values in state unless required.

---

## 🎯 Event Handling

```jsx
onChange={(event) => updateRed(event.target.value)}
```

```jsx
<input onChange={(e) => setName(e.target.value)} />
```

---

## 🎨 Inline Styling & CSS

```jsx
<div style={{ textAlign: 'center' }}></div>

<div className="colorBox" style={{ /* ...styles... */ }}></div>
```

### Styling Options

* Inline styles
* CSS files
* CSS Modules
* Styled Components

---

## 💾 Local Storage

```js
localStorage.setItem('key', JSON.stringify(data));
```

```js
let localData = JSON.parse(localStorage.getItem('key'));
```

---

## 🔄 useEffect Hook

### Runs on Dependency Change

```js
useEffect(() => {
  // code...
}, [users]);
```

### Runs Once (On Mount)

```js
useEffect(() => {
  // code...
}, []);
```

### Runs on Every Render

```js
useEffect(() => {
  // code...
});
```

---

## 📌 useRef Hook

```js
const userRef = useRef();
```

```jsx
<input ref={userRef} type="text" />
```

```js
userRef.current.style.display = "none";
const userName = userRef.current.value;
userRef.current.focus();
```

### Use Cases

* Focus management
* DOM manipulation
* Mutable values

---

## 🔁 Rendering Lists

```js
const studentData = [
  { name: "A", age: 25 },
  {},
  {},
  {}
];
```

```jsx
{studentData.map((student, index) => (
  <tr key={index}>
    <td>{student.name}</td>
  </tr>
))}
```

### Key Rules

* `key` must be unique
* Avoid index as key if list changes

---

## 🔁 useReducer

```js
const [state, dispatch] = useReducer(reducer, emptyData);
```

```js
dispatch({ type: "INCREMENT" });
```

---

## 🌍 Context API

```js
import { createContext, useContext } from 'react';
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

## 🧭 React Router

### Installation

```bash
npm i react-router
```

```json
"react-router": "^7.9.2"
```

### Routing Example

```jsx
<BrowserRouter>

  <Link to="/">Home</Link>
  <Link to="/Cart">My Cart</Link>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Cart" element={<Cart />} />
  </Routes>

</BrowserRouter>
```

### URL Params

```js
const paramsData = useParams();
```

### Fallback Route (404)

```jsx
<Route path="/*" element={<Navigate to="/" />} />
```

---

## 🌐 API Calls (Fetch)

### GET Request

```js
let response = await fetch(apiURL);
response = await response.json();
```

### POST Request

```js
await fetch(apiURL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, age, email })
});
```

---

## 💤 Lazy Loading & Code Splitting

```js
import { lazy, Suspense } from "react";

const User = lazy(() => import("./User"));
```

```jsx
<Suspense fallback={<Loader />}>
  <User />
</Suspense>
```

---

## 🚀 Concurrent & Modern React Hooks

### useTransition

```js
const [pending, startTransition] = useTransition();
```

### useActionState

```js
const [data, action, pending] = useActionState(handleSubmit, undefined);
```

### useFormStatus

```js
import { useFormStatus } from 'react-dom';

const { pending } = useFormStatus();
```

---

## ⏳ Artificial Delay (Testing)

```js
await new Promise((res) => setTimeout(res, 5000));
```

---

## 🎨 Styled Components

```js
import styled from 'styled-components';

const Button = styled.button`
  background: blue;
  color: white;
`;
```

---

## 🔁 Controlled vs Uncontrolled Components

| Controlled           | Uncontrolled       |
| -------------------- | ------------------ |
| useState             | useRef             |
| React controls input | DOM controls input |

---

## ✅ Best Practices

* Keep components small
* Avoid unnecessary state
* Prefer composition over inheritance
* Use keys properly
* Avoid prop drilling (use context)
* Separate UI and logic

---

## 🧠 Mental Model Summary

```text
UI = f(State, Props)
State change → Re-render → Virtual DOM diff → Real DOM update
```

---

## 🧪 Simple Combined Program Example

```js
import { useState } from 'react'
import Header from './Header'
import './App.css'
import './css/style.css'

const [count, setCount] = useState(0);
let localData = JSON.parse(localStorage.getItem('key'));

<div style={{ textAlign: 'center' }}></div>
<div className="colorBox" style={{ /* ...styles... */ }}></div>

onChange={(event) => updateRed(event.target.value)}

function Test() {
  return (<div>...</div>)
}

export default Test;
```
