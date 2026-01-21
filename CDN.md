## 1. What is a CDN (Content Delivery Network)?

![Image](https://images.wondershare.com/edrawmax/templates/network-diagram-for-content-delivery-network.png)

![Image](https://substackcdn.com/image/fetch/%24s_%21rycF%21%2Cf_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd2785489-6c63-40cf-bb4a-1b8656a81d01_1600x1104.png)

![Image](https://scaleyourapp.com/wp-content/uploads/2020/07/CDN-and-load-balancer-grid.jpeg)

### Definition

A **CDN (Content Delivery Network)** is a **network of geographically distributed servers** that deliver static and cacheable content **from the server closest to the user**.

Instead of every request going to your main server, a CDN serves content from an **edge server** near the user.

---

### What content is served via CDN

* Images
* CSS files
* JavaScript bundles
* Fonts
* Videos
* Cached API responses

---

### How CDN works (step-by-step)

1. User requests a webpage
2. DNS routes request to nearest CDN edge server
3. If content is cached → served immediately
4. If not cached → fetched from origin server, cached, then served

---

### Why CDN improves performance

* Reduces **network latency**
* Improves **TTFB**
* Speeds up **FCP and LCP**
* Reduces load on origin server
* Improves availability during traffic spikes

---

### CDN examples (for interviews)

* Cloudflare
* AWS CloudFront
* Akamai
* Fastly
* Azure CDN

---

### When you should use a CDN

* Global users
* Media-heavy applications
* High-traffic websites
* Performance-sensitive apps

---

### Interview one-liner

> *A CDN is a globally distributed network of servers that delivers content from the nearest location to the user, reducing latency and improving page load performance.*

---