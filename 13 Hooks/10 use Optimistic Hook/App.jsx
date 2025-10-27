// This new hook helps you instantly show optimistic UI updates before a server response comes back.
// ✅ Benefit: Users see instant updates without waiting for a round-trip to the server.

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
