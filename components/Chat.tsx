"use client";

import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();

  const messageEndRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const isFirstRender = useRef(true);

  
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  
    return () => {
      if(window.screenY > 1080)
      scrollToBottom();
    }
  }, [messages])
  

  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className="relative flex flex-col w-full max-w-md py-24 mx-auto stretch px-3">
      <h1 className=" text-xl font-semibold text-center mb-10">
        Ask AI <span className="text-bold text-red-500">Delight</span>
      </h1>
      {messages.length > 0 ? (
        messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap my-2">
            {m.role === "user" ? <span className="text-md font-bold">You<span className="mx-1">:</span></span> : <span className="font-bold text-md text-red-500 mr-1">Delight<span className="mx-1">:</span></span>}
            {m.content}
          </div>
        ))
      ) : (
        <div className="ai-description">
          <h3 className="text-lg text-center mb-1">
            Ask me anything about Turkish language and culture.
          </h3>
          <h4 className="text-md text-center">
            I will answer your questions immediately.
          </h4>
        </div>
      )}
      <div ref={messageEndRef}></div>
      <form onSubmit={handleSubmit} autoComplete="on">
        <div
          className={`flex items-center space-between fixed bottom-0 w-full max-w-md p-2 mb-8  ${
            inputFocused ? "border-2 border-red-500" : "border border-red-400"
          }  rounded shadow-xl opacity-100 bg-white`}
        >
          <input
            className="outline-none w-full"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
          </button>
        </div>
      </form>
      
    </div>
  );
}
