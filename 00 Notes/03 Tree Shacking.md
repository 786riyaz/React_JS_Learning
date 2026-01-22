Below is a **deep, interview-ready explanation of Tree Shaking**, including **how it works internally, prerequisites, limitations, and real-world examples**.

---

# What Is Tree Shaking?

**Tree Shaking** is a **build-time optimization technique** that **removes unused (dead) code** from the final JavaScript bundle.

> In simple terms:
> **If you didn’t import it, it won’t be shipped.**

---

# Why Is It Called “Tree Shaking”?

Your application’s module dependency graph looks like a **tree**.
During build time, the bundler **“shakes” the tree** and removes branches (exports) that are **never used**.

---

# Why Tree Shaking Matters (Performance Impact)

Without tree shaking:

* Large bundle size
* Slower page load
* More JS to parse and execute

With tree shaking:

* Smaller bundles
* Faster Time-to-Interactive (TTI)
* Better Core Web Vitals

---

# How Tree Shaking Works (Internals)

Tree shaking relies on **static analysis** of ES modules.

### Core Steps

1. Build a **module dependency graph**
2. Analyze **static `import` / `export` statements**
3. Mark used exports as **“live”**
4. Remove unused exports during bundling + minification

---

# Example (Very Important)

### ❌ Without Tree Shaking (CommonJS)

```js
const utils = require("./utils");
utils.add(2, 3);
```

Bundler cannot know which functions are used.

---

### ✅ With Tree Shaking (ES Modules)

```js
import { add } from "./utils";
add(2, 3);
```

```js
// utils.js
export function add() {}
export function subtract() {}
```

Only `add()` is included in the final bundle.

---

# Mandatory Requirements for Tree Shaking

## 1. ES Modules (Critical)

Tree shaking **only works reliably with ES modules**:

```js
import { something } from "lib";
export const value = 10;
```

❌ Does NOT work well with:

* `require()`
* `module.exports`

---

## 2. Bundler Support

Tree shaking is performed by the bundler:

| Bundler             | Tree Shaking |
| ------------------- | ------------ |
| Webpack (prod mode) | ✅            |
| Rollup              | ✅ (best)     |
| Vite                | ✅            |
| Parcel              | ✅            |

---

## 3. Production Mode

```bash
npm run build
```

* Enables minification
* Enables dead code elimination
* Uses tools like **Terser**

---

## 4. Side-Effect Awareness

Bundlers remove code only if it is **side-effect free**.

### Example of Side Effect

```js
console.log("Hello");
window.global = {};
```

Bundlers **will NOT remove** these automatically.

---

# The `sideEffects` Flag (Advanced Interview Topic)

In `package.json`:

```json
{
  "sideEffects": false
}
```

This tells the bundler:

> “All files are safe to tree shake unless explicitly imported.”

Or selectively:

```json
{
  "sideEffects": ["*.css"]
}
```

---

# Tree Shaking vs Minification (Very Important Difference)

| Tree Shaking                  | Minification                   |
| ----------------------------- | ------------------------------ |
| Removes unused code           | Shortens variable names        |
| Happens at module level       | Happens at syntax level        |
| Reduces bundle size logically | Reduces bundle size physically |

Tree shaking usually happens **before** minification.

---

# Real-World Example (React)

❌ Bad import (breaks tree shaking):

```js
import _ from "lodash";
```

✅ Good import:

```js
import debounce from "lodash/debounce";
```

---

# Why Tree Shaking Sometimes Fails

### Common Reasons

1. Using `require()` instead of `import`
2. Barrel files exporting everything blindly
3. Side effects in modules
4. Development mode build
5. Improper bundler configuration

---

# Tree Shaking in React Projects

* CRA → Works in production build
* Vite → Enabled by default
* Next.js → Enabled automatically
* MUI, AntD → Designed for tree shaking

---

# Interview One-Liners

### What is tree shaking?

> Tree shaking is a build-time optimization that removes unused code from JavaScript bundles.

### Why does tree shaking need ES modules?

> Because ES modules allow static analysis of imports and exports.

### Does tree shaking happen at runtime?

> No, it happens at build time.

---

# Typical Interview Follow-Up Questions

### Q: Does tree shaking remove unused CSS?

❌ No (unless using specialized tools like PurgeCSS)

---

### Q: Can tree shaking remove unused functions inside a file?

✔️ Yes, if they are exported and unused.

---

# Final Mental Model (Best Explanation)

> Tree shaking works like a smart packer that ships **only what your app actually uses**, based on static imports.

---

If you want next:

* **Tree shaking vs code splitting**
* **Webpack vs Rollup internals**
* **Why barrel files can be dangerous**
* **Bundle size analysis in React**
* **Interview performance optimization scenarios**

Just tell me what to continue.
