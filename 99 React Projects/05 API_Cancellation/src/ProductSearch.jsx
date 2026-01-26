import { useEffect, useState } from "react";

function ProductSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1️⃣ Debounce effect (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // 2️⃣ API call with AbortController
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);

    fetch(`https://dummyjson.com/products/search?q=${debouncedQuery}`, {
      signal,
    })
      .then(res => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then(data => {
        setResults(data.products);
        setLoading(false);
      })
      .catch(err => {
        if (err.name === "AbortError") return;
        console.error(err);
        setLoading(false);
      });

    return () => controller.abort();
  }, [debouncedQuery]);

  return (
    <div style={{ maxWidth: 400 }}>
      <h3>Product Search (Debounced)</h3>

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {results.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;
