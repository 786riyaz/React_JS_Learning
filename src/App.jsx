import { useEffect, useState, useRef } from "react";
import "./css/style.css";

export default function App() {
  const [userName, setUserName] = useState("User1");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const pollingIntervalRef = useRef(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchMessages = async (showLoading = false) => {
    try {
      if (showLoading) {
        setIsLoading(true);
      }
      
      const chatting = await fetch(
        "https://mern-chatting-application.vercel.app/getAllMessage"
      );
      const chattingData = await chatting.json();
      console.log("Fetched messages:", chattingData);
      
      // Check if there are new messages
      const hasNewMessages = chattingData.length > messages.length;
      setMessages(chattingData);
      
      // Only auto-scroll if there are new messages and user hasn't scrolled up
      if (hasNewMessages && shouldAutoScroll) {
        setTimeout(scrollToBottom, 100);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      if (showLoading) {
        setIsLoading(false);
      }
    }
  };

  const sendMessage = async () => {
    if (message.trim() === "") return; // Prevent sending empty messages

    const newMessage = {
      userName: userName,
      message: message,
      timestamp: new Date().toISOString(),
    };

    // Optimistically update UI
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessage(""); // Clear the input field after sending
    
    // Always scroll to bottom when user sends a message
    setShouldAutoScroll(true);
    setTimeout(scrollToBottom, 100);

    try {
      let response = await fetch(
        "https://mern-chatting-application.vercel.app/addMessage",
        {
          method: "POST",
          body: JSON.stringify(newMessage),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      if (response.ok) {
        console.log("Message sent successfully:", await response.json());
        
        // Immediately fetch latest messages after successful send
        // This bypasses the 30-second polling interval
        await fetchMessages(true); // Show loading indicator
      } else {
        console.error("Failed to send message:", response.status);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Optionally revert the optimistic update on error
    }
  };

  useEffect(() => {
    document.title = `Welcome ${userName}`;

    // Initial fetch
    fetchMessages();

    // Set up polling for new messages every 30 seconds
    pollingIntervalRef.current = setInterval(() => {
      fetchMessages();
    }, 30000);

    // Cleanup interval on component unmount or user change
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, [userName]);

  // Handle scroll detection
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold
    setShouldAutoScroll(isAtBottom);
  };

  return (
    <div className="chat-container">
      <h3 className="Header">💬 Chatting Application</h3>

      <div className="user-section">
        <select
          name="userName"
          id="userNameDD"
          className="user-select"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          disabled={true}
        >
          <option value="Riyaz">Riyaz</option>
          <option value="Arbaz">Arbaz</option>
          <option value="User1">User1</option>
          <option value="Tasin">Tasin</option>
        </select>

        <h3 className="heading">Welcome, {userName}! 👋</h3>
      </div>

      <div className="messages-container" onScroll={handleScroll}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.userName === userName ? "own" : "other"}`}
          >
            <div className="message-bubble">
              <div className="message-user">{msg.userName}</div>
              <div className="message-text">{msg.message}</div>
            </div>
            <div className="message-time">
              {new Date(msg.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
        {isLoading && (
          <div className="loading-indicator">
            <div className="loading-spinner"></div>
            <span>Syncing messages...</span>
          </div>
        )}
      </div>

      <div className="input-section">
        <input
          placeholder="Type your message here..."
          type="text"
          className="message-input"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button className="send-button" onClick={sendMessage}>
          Send 📤
        </button>
      </div>
    </div>
  );
}
