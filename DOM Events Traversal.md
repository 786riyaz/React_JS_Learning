## Event bubbling and event propagation in React

---

## 1. What is event propagation?

**Event propagation** describes how an event **travels through the DOM tree** when it occurs on an element.

There are **three phases**:

1. **Capturing phase** (top → down)
2. **Target phase** (actual element)
3. **Bubbling phase** (bottom → up)

React supports **capturing and bubbling**, just like the browser.

![Image](https://javascript.info/article/bubbling-and-capturing/eventflow.svg)

![Image](https://chiamakaikeanyi.dev/static/f56abcd765f7b006af69347365ee1c7d/c1b5a/event-flow.png)

![Image](https://blog.logrocket.com/wp-content/uploads/2021/07/event-capturing-bubbling-sequence-diagram.png)

---

## 2. Event bubbling

### Definition

**Event bubbling** means the event starts at the **target element** and then **bubbles up** through its parent elements.

### Example (browser behavior)

```html
<div>
  <button>Click</button>
</div>
```

Clicking the button triggers:

1. `button` click handler
2. `div` click handler
3. `body` click handler

---

### Event bubbling in React

```jsx
function App() {
  return (
    <div onClick={() => console.log("Div clicked")}>
      <button onClick={() => console.log("Button clicked")}>
        Click me
      </button>
    </div>
  );
}
```

**Output**

```
Button clicked
Div clicked
```

Because React events **bubble by default**.

---

## 3. Event capturing (trick interview question)

### Definition

**Event capturing** happens **before bubbling**, moving **from parent → child**.

### React syntax

React exposes capture phase using the `Capture` suffix.

```jsx
<div onClickCapture={() => console.log("Div capture")}>
  <button onClickCapture={() => console.log("Button capture")}>
    Click
  </button>
</div>
```

**Execution order**

```
Div capture
Button capture
```

Then target and bubbling phases run.

---

## 4. stopPropagation() in React

To stop bubbling:

```jsx
function handleClick(e) {
  e.stopPropagation();
}
```

```jsx
<button onClick={handleClick}>Click</button>
```

Effect:

* Event does **not** reach parent handlers
* Useful in modals, dropdowns, nested buttons

---

## 5. Event delegation in React (important concept)

React uses **event delegation** internally:

* Instead of attaching listeners to every element
* React attaches **one listener at the root**

Benefits:

* Better performance
* Lower memory usage
* Easier cleanup

> Even though you write `onClick` on elements, React handles them centrally.

---

## 6. Synthetic Events in React

React wraps native browser events in a **SyntheticEvent** object.

Features:

* Cross-browser consistency
* Same API across browsers
* Normalized event behavior

Example:

```jsx
function handleClick(e) {
  console.log(e.nativeEvent); // original browser event
}
```

---

## 7. Common real-world use cases

### Dropdown inside a page

* Clicking dropdown should not close page
* Use `stopPropagation`

### Modal overlay

* Click overlay → close modal
* Click modal content → stop bubbling

### Table row click + button click

* Row navigates
* Button performs action without navigation

---

## 8. Common interview traps

❌ “React doesn’t support event capturing”
❌ “stopPropagation stops default behavior”
❌ “Events attach directly to DOM nodes”

Correct:

* React supports capture and bubble
* `preventDefault()` ≠ `stopPropagation()`
* React uses delegated synthetic events

---

## 9. Interview-ready summary

### One-liner

> *Event propagation describes how events move through the DOM. In React, events bubble by default, can be captured using the Capture phase, and can be stopped using stopPropagation. React handles events through a delegated SyntheticEvent system for performance and consistency.*

---

If you want, I can next explain:

* `preventDefault()` vs `stopPropagation()`
* How React event system differs from native DOM
* Event handling changes in React 17+
* Real interview questions based on event bubbling
