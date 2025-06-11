// app/components/FakeGPTChatBox.js
"use client";

import { useState, useRef, useEffect } from "react";
import HighlightWord from "./HighlightWord";
import gsap from "gsap";

const suggestions = [
  "What have you built?",
  "Show me a cool project",
  "What’s your tech stack?",
  "Ever led a team?",
  "Frontend or Backend?"
];

export default function FakeGPTChatBox() {
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  const responses = {
    "What have you built?": () => (
      <p>
        I built <HighlightWord linkText="Impact Nutrition" href="https://impactnutrition.com.tn">Impact Nutrition</HighlightWord>,
        a high-performance WooCommerce store, and 
        <HighlightWord linkText="DNS Abuse Tool" href="https://acidtool.com">DNS Abuse Tool</HighlightWord>,
        a domain investigation plugin. I also created a 
        <HighlightWord linkText="Google Reviews plugin" href="#">Google Reviews plugin</HighlightWord> for WordPress.
      </p>
    ),
    "Show me a cool project": () => (
      <p>
        Check out <HighlightWord image="/images/impact.png">Impact Nutrition</HighlightWord> — it's a headless WordPress site
        using Next.js, GraphQL, and custom WooCommerce APIs. Clean UI, blazing fast.
      </p>
    ),
    "What’s your tech stack?": () => (
      <p>
        I work with <HighlightWord linkText="Next.js" href="https://nextjs.org">Next.js</HighlightWord>,
        <HighlightWord linkText="GraphQL" href="https://graphql.org">GraphQL</HighlightWord>,
        <HighlightWord linkText="Tailwind CSS" href="https://tailwindcss.com">Tailwind CSS</HighlightWord>,
        <HighlightWord linkText="WordPress" href="https://wordpress.org">WordPress</HighlightWord>,
        <HighlightWord linkText="GSAP" href="https://gsap.com">GSAP</HighlightWord>, and AWS.
      </p>
    ),
    "Ever led a team?": () => (
      <p>
        Yes — I’ve led dev teams as CTO of 
        <HighlightWord linkText="WWT Technologies" href="https://wwt-technology.com">WWT Technologies</HighlightWord> and 
        <HighlightWord linkText="Wappdev" href="https://wappdev.co.uk">Wappdev</HighlightWord>, managing WordPress, mobile apps,
        and AWS hosting for 20+ clients.
      </p>
    ),
    "Frontend or Backend?": () => (
      <p>
        Both. I love crafting interactive UIs with 
        <HighlightWord linkText="Framer Motion" href="https://www.framer.com/motion/">Framer Motion</HighlightWord> and 
        <HighlightWord linkText="GSAP" href="https://gsap.com">GSAP</HighlightWord>, but I’m equally at home designing APIs,
        working with <HighlightWord linkText="PHP" href="https://www.php.net">PHP</HighlightWord>, 
        <HighlightWord linkText="Node.js" href="https://nodejs.org">Node.js</HighlightWord>, and server automation.
      </p>
    )
  };

  function handleSuggestionClick(question) {
    addToChat(question, true);
    setTimeout(() => {
      const res = responses[question];
      if (res) addToChat(res(), false);
    }, 300);
  }

function addToChat(content, isUser) {
  if (typeof content === "string" || isUser) {
    setChatHistory((prev) => [...prev, { content, isUser }]);
  } else {
    const childrenArray = React.Children.toArray(content.props.children);
    let index = 0;
    const typed = [];

    setChatHistory((prev) => [...prev, { content: <p></p>, isUser: false }]);

    const typeNext = () => {
      if (index < childrenArray.length) {
        typed.push(childrenArray[index]);
        setChatHistory((prev) => [
          ...prev.slice(0, -1),
          { content: <p>{typed.slice()}</p>, isUser: false }
        ]);
        index++;
        setTimeout(typeNext, 40);
      }
    };

    setTimeout(typeNext, 300);
  }
}

  function handleSubmit() {
    if (!input.trim()) return;
    addToChat(input, true);
    setInput("");
    setTimeout(() => addToChat(<p>That’s a great question. Let me show you something soon!</p>, false), 500);
  }

  useEffect(() => {
    gsap.to(chatBoxRef.current, {
      scrollTop: chatBoxRef.current.scrollHeight,
      duration: 0.5
    });
  }, [chatHistory]);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-black text-green-400 rounded-xl">
      <div
        ref={chatBoxRef}
        className="h-80 overflow-y-auto space-y-3 p-2 mb-4 text-sm"
      >
        {chatHistory.map((entry, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg ${
              entry.isUser
                ? "bg-green-900 text-white self-end"
                : "bg-gray-800 text-green-400"
            }`}
          >
            {typeof entry.content === "string" ? (
              <p>{entry.content}</p>
            ) : (
              entry.content
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {suggestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSuggestionClick(q)}
            className="bg-green-700 text-white text-xs px-3 py-1 rounded-full hover:bg-green-600"
          >
            {q}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded text-black"
          placeholder="Ask me anything…"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-700 text-white px-4 rounded hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
