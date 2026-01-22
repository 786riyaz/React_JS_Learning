## Core Web Performance Metrics: TTFB, FCP, and LCP

These three metrics describe **different phases of the page loading lifecycle**. Interviewers often expect both **definitions and practical impact**.

---

## 1. Time to First Byte (TTFB)

![Image](https://www.debugbear.com/dimg/606fa5e40c2473c56e53fbd7581a95af.png)

![Image](https://www.debugbear.com/dimg/3189ae5f05053ed5b3ee59e9ce1a4339.png)

![Image](https://cdn.prod.website-files.com/5e3d3268a134a79339be8368/616aabc76ea8851d333c5aa6_I-o0R8e1rfIF5xgoer2Jlce3J7uRRho_x7QG8Q2eiHzNAezlpkKJOPOoz_S2lhqPJb9svmfM9oXEia0iCLYjG_DGylpWw3kgp3-wyi98mBgp_45SK-LpWedpCkn73sr2ilPVJGjN%3Ds0.png)

### What it is

**TTFB** measures the time from:

> when the browser sends an HTTP request
> until it receives the **first byte of the response** from the server.

It includes:

* DNS lookup
* TCP connection
* SSL handshake
* Server processing time

### What it represents

* **Server responsiveness**
* Backend performance
* Network latency

### Good / poor values

* ✅ Good: < 200 ms
* ⚠️ Needs improvement: 200–500 ms
* ❌ Poor: > 500 ms

### How to improve TTFB

* Use CDN
* Optimize backend APIs
* Add server-side caching
* Reduce database latency
* Use SSR / static pages

---

## 2. First Contentful Paint (FCP)

![Image](https://www.onely.com/wp-content/uploads/blog/2023/first-contentful-paint/9-first-contentful-paint.jpg)

![Image](https://yoast.com/app/uploads/2021/03/three-core-web-vitals-image-600x169.jpg)

![Image](https://www.acmethemes.com/blog/wp-content/uploads/2020/01/First-Contentful-Paint-Diagram.jpg)

### What it is

**FCP** measures:

> the time when the browser renders the **first piece of content** on the screen.

This can be:

* Text
* Image
* SVG
* Canvas (not background color)

### What it represents

* **Perceived speed**
* When users see that *something is happening*

### Good / poor values

* ✅ Good: < 1.8 s
* ⚠️ Needs improvement: 1.8–3 s
* ❌ Poor: > 3 s

### How to improve FCP

* Reduce JS bundle size
* Inline critical CSS
* Use SSR or static HTML
* Defer non-critical JS
* Optimize fonts

---

## 3. Largest Contentful Paint (LCP)

![Image](https://web.dev/static/articles/lcp/image/largest-contentful-paint-fc43128e011aa.png)

![Image](https://www.debugbear.com/dimg/3aa5ef9f630786813158bc5dc096cdf5.png)

![Image](https://www.debugbear.com/assets/images/paint-filmstrip-2cc5ab59f9a1759101a413b52b90b7d7.png)

### What it is

**LCP** measures:

> the time when the **largest visible content element** in the viewport is fully rendered.

Usually:

* Hero image
* Banner
* Main heading (`<h1>`)
* Large paragraph

### What it represents

* **Main content readiness**
* When the page feels “loaded” to users

### Good / poor values

* ✅ Good: < 2.5 s
* ⚠️ Needs improvement: 2.5–4 s
* ❌ Poor: > 4 s

### How to improve LCP

* Optimize hero images
* Preload critical resources
* Use CDN
* Avoid render-blocking JS/CSS
* Reduce client-side rendering delays

---

## 4. Comparison summary

| Metric   | Measures                        | Focus             |
| -------- | ------------------------------- | ----------------- |
| **TTFB** | Server → browser response start | Backend & network |
| **FCP**  | First visible content           | Perceived speed   |
| **LCP**  | Main content rendered           | User experience   |

---

## 5. How these metrics relate in real apps

Load timeline:

1. **TTFB** → server responds
2. **FCP** → first text/image appears
3. **LCP** → main content visible

If:

* TTFB is slow → backend or CDN issue
* FCP is slow → JS/CSS blocking
* LCP is slow → heavy images or hydration delay

---

## 6. Interview one-liners

* **TTFB**: *How fast the server responds.*
* **FCP**: *When the user sees something.*
* **LCP**: *When the main content is ready.*

---

If you want, I can next explain:

* CLS (Cumulative Layout Shift)
* INP vs FID
* How hydration affects FCP and LCP
* How to measure these in Chrome DevTools and Lighthouse
