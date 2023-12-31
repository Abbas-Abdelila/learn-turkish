"use client";

import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import Ask from "./Ask";
import Close from "./CloseButton";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const messageEndRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    return () => {
      scrollToBottom();
    };
  }, [messages]);

  const [inputFocused, setInputFocused] = useState(false);


  return (
    
    <>
      {isChatOpen ? (
        <div className="relative flex flex-col w-full max-w-md mx-auto stretch px-3">
          <div
            className="close-btn flex justify-end items-center"
            onClick={() => {
              setIsChatOpen(false);
            }}
          >
            <Close />
          </div>
          <h1 className=" text-xl font-semibold text-center mb-10">
            Ask AI <span className="text-bold text-red-500">Delight</span>
          </h1>
          {messages.length > 0 ? (
            messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap my-2">
                {m.role === "user" ? (
                  <span className="text-md font-bold">
                    You<span className="mx-1">:</span>
                  </span>
                ) : (
                  <span className="font-bold text-md text-red-500 mr-1">
                    Delight<span className="mx-1">:</span>
                  </span>
                )}
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
          <form className="my-12" onSubmit={handleSubmit} autoComplete="on">
            <div
              className={`flex items-center space-between fixed bottom-0 w-full max-w-md p-2 mb-8  ${
                inputFocused
                  ? "border-2 border-red-500"
                  : "border border-red-400"
              }  rounded shadow-xl opacity-100 bg-white dark:bg-[#121212] dark:border-4 dark:border-red-500 dark:shadow-2xl]`}
            >
              <input
                className="outline-none w-full bg:white dark:bg-[#121212] dark:text-white dark:placeholder-gray-400 dark:placeholder-opacity-50"
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
                  className="w-8 h-8 cursor-pointer dark:text-white"
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
      ) : (
        <div onClick={() => setIsChatOpen(true)}>
          <Ask />
        </div>
      )}
    </>
  );
}
