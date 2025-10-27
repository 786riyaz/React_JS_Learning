## 🧩 1. Different Types of Hooks
React Hooks can be grouped into **5 main categories**:
| Category          | Hooks                                                         | Purpose                                       |
| ----------------- | ------------------------------------------------------------- | --------------------------------------------- |
| **State Hooks**   | `useState`, `useReducer`, `useTransition`, `useDeferredValue` | Manage state and UI updates                   |
| **Effect Hooks**  | `useEffect`, `useLayoutEffect`, `useInsertionEffect`          | Handle side effects and DOM manipulations     |
| **Context Hooks** | `useContext`, `useOptimistic` (React 19)                      | Share and access global data                  |
| **Ref Hooks**     | `useRef`, `useImperativeHandle`, `useSyncExternalStore`       | Access DOM elements or persist mutable values |
| **Custom Hooks**  | Any user-defined function starting with `use`                 | Reuse logic between components                |

React's built-in hooks can be categorized for different usage patterns:
- **State Hooks:**
    - `useState`: Local UI state. Example: toggling UI components, form inputs.
    - `useReducer`: Complex state logic (like Redux patterns in component scope).
- **Context Hooks:**
    - `useContext`: Consume context for things like theme, language, or current user info.
- **Ref Hooks:**
    - `useRef`: Mutable values that persist across renders (DOM nodes, timers).
    - `useImperativeHandle`: Customize ref values exposed from components, often with `forwardRef`.
- **Effect Hooks:**
    - `useEffect`: Side effects (fetching data, subscriptions). Cleanups supported.
    - `useLayoutEffect`: Runs synchronously after DOM updates (measuring layout).
    - `useInsertionEffect`: For libraries to inject styling before DOM paint.
- **Performance Hooks:**
    - `useMemo`: Memoizes values to avoid recalculation on every render.
    - `useCallback`: Memoizes callback functions.
    - `useTransition`: Mark updates as non-blocking for prioritizing UI updates (like route transitions).
    - `useDeferredValue`: Defers value updates to keep the UI responsive.
- **Async/Optimistic UI Hooks:**
    - `useOptimistic`: For UI updates in anticipation of async server responses (live chat, comment posting).
    - `useActionState`: Helps manage local state around asynchronous actions (forms, network requests).
- **Other:**
    - `useDebugValue`, `useId`, `useSyncExternalStore` for specialized development or library needs.
--------------------------------------------------------------------
## ⚙️ 2. Different Types of Actions
In React (especially **React 19** and **Next.js 15+**), *actions* can mean **two things**:
1. **Reducer Actions** (Classic Redux or `useReducer`)
   const reducer = (state, action) => {
     switch (action.type) {
       case "increment": return { count: state.count + 1 };
       case "decrement": return { count: state.count - 1 };
       default: return state;
     }`
   };
   const [state, dispatch] = useReducer(reducer, { count: 0 });
   
2. **Server Actions** (New React 19 feature)
   — These are **functions that run on the server**, but are **invoked from client components**.
--------------------------------------------------------------------
## ⚡ 3. `useOptimistic` (React 19)
This new hook helps you **instantly show optimistic UI updates** before a server response comes back.
"use client";
import { useOptimistic } from "react";
export default function Comments() {
  const [comments, setComments] = useState([]);
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );
  async function handleAddComment(commentText) {
    addOptimisticComment({ text: commentText }); // update immediately
    await fetch("/api/comments", { method: "POST", body: commentText });
  }
  return (
    <>
      {optimisticComments.map((c, i) => <p key={i}>{c.text}</p>)}
      <button onClick={() => handleAddComment("Nice post!")}>Add</button>
    </>
  );
}
✅ **Benefit:** Users see instant updates without waiting for a round-trip to the server.
--------------------------------------------------------------------
## 🌐 4. Prerender & PrerenderToNodeStream (React DOM Server)
These are **server-side rendering (SSR)** methods that generate HTML from React components before sending them to the browser.
### `prerender()`
Used for **static pre-rendering**.
It renders the component tree into an HTML string.
import { prerender } from "react-dom/server";
const html = prerender(<App />);
### `prerenderToNodeStream()`
Used for **streaming SSR** (useful in large apps for faster page loads).
import { prerenderToNodeStream } from "react-dom/server";
const stream = prerenderToNodeStream(<App />);
stream.pipe(res); // send HTML chunks as they’re ready
--------------------------------------------------------------------
## 🧠 5. Server Actions (React 19)
**Server Actions** are special async functions that run **on the server** and can be called directly from a **client component**.
// app/actions.js
"use server";
export async function saveUser(data) {
  await db.users.insert(data);
}
// app/page.jsx
"use client";
import { saveUser } from "./actions";
export default function Page() {
  async function handleSubmit() {
    await saveUser({ name: "Riyaz" });
  }
  return <button onClick={handleSubmit}>Save User</button>;
}
✅ Eliminates the need for manual API routes or fetch calls in many cases.
--------------------------------------------------------------------
## 🪞 6. `ref` as a Prop
You can now **pass refs as props** to custom components.
function InputBox(props, ref) {
  return <input ref={ref} />;
}
const ForwardedInput = React.forwardRef(InputBox);
function App() {
  const inputRef = useRef();
  return <ForwardedInput ref={inputRef} />;
}
✅ Used to control DOM elements of child components from parent components.
--------------------------------------------------------------------
## 💧 7. Diffs for Hydration Errors
**Hydration** = merging server-rendered HTML with client-side React tree.
If they don’t match → *hydration error*.
React 19+ shows **better diffs in console**:
* Before: “Hydration failed”
* Now: It shows **which element and prop mismatched** for easier debugging.
--------------------------------------------------------------------
## 🧩 8. `<Context>` as a Provider
Instead of using `<MyContext.Provider>`, React 19 lets you directly use the context object:
const ThemeContext = createContext("light");
<ThemeContext value="dark">
  <App />
</ThemeContext>
Simpler syntax, same behavior.
--------------------------------------------------------------------
## ♻️ 9. Cleanup Functions for Refs
React 19 introduces **ref cleanup functions**, similar to `useEffect` cleanup.
function MyComponent() {
  const ref = useRef();
  useEffect(() => {
    console.log("Mounted:", ref.current);
    return () => console.log("Unmounted:", ref.current);
  }, []);
  return <div ref={ref}>Hello</div>;
}
In new React:
<div ref={(node) => {
  if (node) console.log("Mounted");
  else console.log("Unmounted");
}} />
--------------------------------------------------------------------
## 🕰️ 10. `useDeferredValue` Initial Value
`useDeferredValue(value, { initialValue })`
Now supports an **initial value** to display immediately during transition.
const deferredSearch = useDeferredValue(searchTerm, { initialValue: "" });
--------------------------------------------------------------------
## 🪪 11. Support for Document Metadata
React 19 introduces `<title>`, `<meta>`, `<link>` and other head tags *within components*.
export default function Page() {
  return (
    <>
      <title>Profile</title>
      <meta name="description" content="User profile page" />
      <h1>Hello, Riyaz!</h1>
    </>
  );
}
--------------------------------------------------------------------
## 🎨 12. Support for Stylesheets
Importing stylesheets directly in React components (React 19):
import "./profile.css";
export default function Profile() {
  return <div className="card">Styled Component</div>;
}
--------------------------------------------------------------------
## ⚙️ 13. Support for Async Scripts
You can load scripts with async behavior safely:
<script async src="https://example.com/analytics.js" />
React ensures correct order and deduplication during SSR + hydration.
--------------------------------------------------------------------
## 🚀 14. Support for Preloading Resources
React can now **preload fonts, images, scripts, or stylesheets** via:
<link rel="preload" as="image" href="/banner.png" />
Speeds up rendering for critical assets.
--------------------------------------------------------------------
## 🧾 15. Better Error Reporting
React 19 gives detailed stack traces, component names, and error boundaries with clear explanations (especially hydration and hook misuse errors).
--------------------------------------------------------------------
## ⚙️ 16. Support for Custom Elements
React now supports **native web components** (custom HTML elements like `<my-button>`).
function App() {
  return <my-button label="Click me"></my-button>;
}
Props like `class`, `id`, `style` work natively.
--------------------------------------------------------------------
## 💧 17. Hydration (Deep Explanation)
**Hydration** happens when:
1. The server sends **pre-rendered HTML** (SSR).
2. The client-side React attaches event listeners and state.
If mismatch occurs → React re-renders or shows warnings.
Example:
// Server
<div>Count: 0</div>
// Client
<div>Count: 1</div>
This triggers a **hydration error**.
✅ To fix: ensure consistent initial states between server & client.