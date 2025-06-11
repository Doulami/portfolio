"use client";

import { useState, useRef, useEffect } from "react";
import HighlightWord from "./HighlightWord";
import { FaMicrophone } from "react-icons/fa";
import { motion } from "framer-motion";

const suggestions = [
  "What have you built?",
  "Show me a cool project",
  "What’s your tech stack?",
  "Ever led a team?",
];

export default function FakeGPTChatBox() {
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  const responses = {
    "What have you built?": () => (
      <p>
        Khaled built <HighlightWord linkText="Impact Nutrition" href="https://impactnutrition.com.tn">NOT Impact Nutrition</HighlightWord>,{" "}
        <HighlightWord linkText="DNS Abuse Tool" href="https://acidtool.com">DNS Abuse Tool</HighlightWord>, and more.
      </p>
    ),
    "Show me a cool project": () => (
      <p>
        Try <HighlightWord image="/images/impact.png">Impact Nutrition</HighlightWord> — a Next.js headless WordPress shop.
      </p>
    ),
    "What’s your tech stack?": () => (
      <p>
        He works with <HighlightWord linkText="Next.js" href="https://nextjs.org">Next.js</HighlightWord>,{" "}
        <HighlightWord linkText="GraphQL" href="https://graphql.org">GraphQL</HighlightWord>,{" "}
        <HighlightWord linkText="WordPress" href="https://wordpress.org">WordPress</HighlightWord>, and AWS.
      </p>
    ),
    "Ever led a team?": () => (
      <p>
        Yes — he was CTO at <HighlightWord linkText="WAPPDEV" href="https://wappdev.co.uk">WAPPDEV</HighlightWord> and{" "}
        <HighlightWord linkText="WWT Technologies" href="https://wwt-technology.com">WWT</HighlightWord>.
      </p>
    ),
  };

  const addToChat = (content, isUser) => {
    setChatHistory((prev) => [...prev, { content, isUser }]);
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    addToChat(input, true);
    setInput("");

    setTimeout(() => {
      const match = responses[input.trim()];
      if (match) addToChat(match(), false);
      else addToChat(<p>I’ll check with Khaled about that 🧐</p>, false);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  useEffect(() => {
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [chatHistory]);

  return (
    <div className="bg-black text-green-400 rounded-xl p-6 w-full h-full flex flex-col max-h-full">
      {/* 🧠 Assistant Intro */}
      <div className="flex flex-col items-center text-center mb-6">
        <img
            src="/images/khaleddoulami.jpg"
            alt="Avatar"
            className="w-16 h-16 rounded-full shadow-lg mb-2"
        />
        <p className="text-sm leading-relaxed max-w-xs">
            Hi, I’m <strong>Khaled’s Assistant</strong> — here to help you explore his{" "}
            <HighlightWord>CV</HighlightWord> and{" "}
            <HighlightWord>portfolio</HighlightWord>. Ask away!
        </p>
       </div>

      {/* 💬 Chat Display */}
      <div ref={chatBoxRef} className="flex-1 overflow-y-auto space-y-3 text-sm mb-4">
        {chatHistory.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-2 rounded-lg max-w-[90%] ${
              entry.isUser ? "bg-green-900 text-white self-end ml-auto" : "bg-zinc-800 text-green-400"
            }`}
          >
            {typeof entry.content === "string" ? <p>{entry.content}</p> : entry.content}
          </motion.div>
        ))}
      </div>

      {/* ⚡ Suggested Buttons */}
      <div className="flex flex-wrap gap-2 mb-3">
        {suggestions.map((q) => (
          <button
            key={q}
            onClick={() => {
              addToChat(q, true);
              setTimeout(() => {
                const r = responses[q];
                if (r) addToChat(r(), false);
              }, 300);
            }}
            className="bg-green-700 text-white text-xs px-3 py-1 rounded-full hover:bg-green-600"
          >
            {q}
          </button>
        ))}
      </div>

      {/* 🧾 Input + Mic */}
      <div className="flex gap-2 items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask something…"
          className="flex-1 p-2 rounded text-black"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-700 text-white px-4 rounded hover:bg-green-600"
        >
          Send
        </button>
        <button className="text-green-400 hover:text-white text-xl">
          <FaMicrophone />
        </button>
      </div>
    </div>
  );
}
