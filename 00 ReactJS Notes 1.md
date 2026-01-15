# 📘 React JS Notes (Vite + Modern React)

---

## ⚙️ Project Setup (Vite)

* **Development Server Port:** `5173`
* **Project Flow:**

```text
index.html → main.jsx → App.jsx
```

* **React Latest Version:** `19.1.1`

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

## 🔁 useState Hook

```js
const [count, setCount] = useState(0);
```

```js
const [color, setColor] = useState("Red");
```

---

## 💾 Local Storage

```js
let localData = JSON.parse(localStorage.getItem('key'));
```

---

## 🎨 Inline Styling & JSX

```jsx
<div style={{ textAlign: 'center' }}></div>

<div
  className="colorBox"
  style={{ /* ...styles... */ }}
></div>
```

---

## 🎯 Event Handling

```jsx
onChange={(event) => updateRed(event.target.value)}
```

---

## 🧩 Functional Component Example

```jsx
function Test() {
  return (<div>...</div>)
}

export default Test;
```

---

## 🧱 Components Overview

* **Types of Components**

  * Class Components
  * Functional Components ✅ (Recommended)

* **Rules**

  * Only **one default export** per file
  * Named exports are allowed

```js
import A, { B } from './MyComponent'
// A → Default Component
// B → Named Component
```

* **Uncontrolled Components** (using refs instead of state)

---

## 📤 Named Exports

```js
export const UserKey = "786";

export function Profile() {
  return (<div>...</div>)
}
```

---

## 🧠 State Concepts

* **State**
* **Derived State**

---

## 🔄 useEffect Hook

```js
useEffect(() => {
  // code...
}, [users]); // Runs when `users` changes
```

```js
useEffect(() => {
  // code...
}, []); // Runs only once (on mount)
```

```js
useEffect(() => {
  // code...
}); // Runs on every render
```

---

## 📥 Props

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
{studentData.map((student) => (
  <tr>
    <td>{student.name}</td>
  </tr>
))}
```

---

## 📝 useFormStatus (React DOM)

```js
import { useFormStatus } from 'react-dom';

const { pending } = useFormStatus();
```

---

## ⏳ Artificial Delay

```js
await new Promise((res) => setTimeout(res, 5000));
```

---

## 🔀 useTransition

```js
const [pending, startTransition] = useTransition();
```

---

## 🚀 useActionState

```js
const [data, action, pending] = useActionState(handleSubmit, undefined);
```

---

## 🔁 useReducer

```js
const [state, dispatch] = useReducer(reducer, emptyData);
```

---

## 🎨 Styled Components

```js
import styled from 'styled-components';
```

---

## 🌍 Context API

```js
import { createContext, useContext } from 'react';
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

---

## 🧩 Navbar Component

```js
export default function Navbar() {
  // ...
}
```

---

## 🚧 Fallback Route (404 Handling)

```jsx
<Route path="/*" element={<Navigate to="/" />} />
```

---

## 📌 URL Params

```js
const paramsData = useParams();
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
response = await fetch(apiURL, {
  method: "post",
  body: JSON.stringify({ name, age, email })
});
```

---

## 💤 Lazy Loading

```js
import { lazy, Suspense, useState } from "react";
```

```js
const User = lazy(() => import("./User"));
```

## Simple Program 
```js
import { useState } from 'react'
import Header from './Header'
import './App.css'
import './css/style.css'
const [count, setCount] = useState(0);
let localData = JSON.parse(localStorage.getItem('key'))
<div style={{ textAlign: 'center' }}></div>
<div className="colorBox" style={{ /* ...styles... */ }}></div>
onChange={(event) => updateRed(event.target.value)}

function Test() {
  return (<div>...</div>)
}

export default Test;
```