"use client";

import { useState } from "react";

export default function FakeGPTChatBox() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I’m your assistant. Ask me anything about Khaled." },
    { role: "user", text: "Show me Khaled’s key skills." },
    { role: "assistant", text: "WordPress, Next.js, WooCommerce, ACF, APIs, AWS, and more." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-xl bg-white shadow-inner">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 text-sm font-medium text-gray-600 bg-gray-50">
        🔹 Khaled’s Assistant
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[80%] px-4 py-2 rounded-xl ${
              msg.role === "assistant"
                ? "bg-blue-100 text-gray-800 self-start"
                : "bg-green-100 text-gray-900 self-end ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
