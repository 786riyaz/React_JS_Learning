This is a **very common interview question**, and the expected answer is nuanced. Below is the **correct, precise, interview-ready explanation**.

---

## Short Answer (Interview Version)

* **React** → ❌ **Not SSR by default** (Client-Side Rendering)
* **Next.js** → ✅ **Supports SSR** (and more)

---

## Detailed Explanation

### 1. React (By Default: CSR)

React itself is a **UI library**, not a framework.
Out of the box, React applications are **Client-Side Rendered (CSR)**.

#### How React CSR Works

```
Browser loads empty HTML
        ↓
JS bundle loads
        ↓
React renders UI in browser
```

#### Characteristics

* Initial HTML is mostly empty (`<div id="root"></div>`)
* Slower first paint
* SEO issues without extra work
* Rendering happens in the browser

> React **can support SSR**, but **it does not provide it by default**.

---

### Can React Do SSR?

✔️ Yes — but **you must configure it manually** using:

* Node.js
* `ReactDOMServer`
* Custom routing
* Hydration logic

This setup is **complex and error-prone**, which is why frameworks exist.

---

### 2. Next.js (SSR Supported Natively)

Next.js is a **React framework** that provides **SSR out of the box**.

#### Next.js Rendering Flow (SSR)

```
Request → Server renders HTML → HTML sent to browser
                           ↓
                    React hydrates
```

#### Built-in Rendering Options

Next.js supports **multiple rendering strategies**:

| Rendering Type | Supported |
| -------------- | --------- |
| CSR            | ✅         |
| SSR            | ✅         |
| SSG            | ✅         |
| ISR            | ✅         |

---

## Rendering Types Comparison

| Feature              | React          | Next.js     |
| -------------------- | -------------- | ----------- |
| CSR                  | ✅ Default      | ✅           |
| SSR                  | ❌ Manual setup | ✅ Built-in  |
| SEO Friendly         | ❌ Limited      | ✅ Excellent |
| Routing              | ❌ External lib | ✅ Built-in  |
| Performance          | Medium         | High        |
| Production Ready SSR | ❌              | ✅           |

---

## Example to Explain in Interview

### React (CSR)

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

HTML sent to browser:

```html
<div id="root"></div>
```

---

### Next.js (SSR)

```js
export async function getServerSideProps() {
  return { props: { message: "Hello" } };
}
```

HTML sent to browser:

```html
<h1>Hello</h1>
```

---

## Why Companies Prefer Next.js Over Plain React

1. Faster first page load
2. Better SEO
3. Built-in SSR, routing, API routes
4. Production-ready architecture
5. Less custom configuration

---

## Common Interview Trap (Avoid This)

❌ “React is SSR”
❌ “Next.js replaces React”

✔️ **Correct statement:**

> React is a client-side UI library, while Next.js is a React framework that provides server-side rendering and other optimizations out of the box.

---

## One-Line Interview Answers (Memorize)

* **Is React SSR?**
  React is client-side rendered by default but can support SSR with manual setup.

* **Is Next.js SSR?**
  Yes, Next.js supports SSR natively along with SSG and ISR.

* **Which should I use for SEO apps?**
  Next.js.

---

## Final Summary (Strong Interview Closing)

> React itself does not provide SSR by default, whereas Next.js is a React framework that enables server-side rendering and multiple rendering strategies out of the box.

---

If you want next:

* CSR vs SSR vs SSG vs ISR (deep dive)
* Next.js interview questions
* When NOT to use SSR
* React hydration explained clearly

Tell me what to continue.
