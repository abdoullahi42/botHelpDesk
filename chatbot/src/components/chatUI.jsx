import { useState } from "react";

import { FaChevronLeft, FaMessage } from "react-icons/fa6";
import { BiSend } from "react-icons/bi";

function ChatUI() {
  const [view, setView] = useState("chat"); // 'chat' or 'history'
  const [input, setInput] = useState("");

  // Sample chat history
  const chatHistory = [
    {
      id: 1,
      title: "Product Return Policy",
      preview: "I need information about your return policy...",
      date: "2025-01-02",
      unread: false,
    },
    {
      id: 2,
      title: "Shipping Options",
      preview: "What shipping methods are available...",
      date: "2025-01-01",
      unread: true,
    },
  ];

  const ChatView = () => (
    <div className="flex flex-col h-screen bg-gray-50 ">
      {/* Header */}
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
            <FaMessage className="text-white h-5 w-5" />
          </div>
          <div>
            <h1 className="font-semibold">Company Help Desk</h1>
            <p className="text-sm text-gray-500">
              Ask us anything about our company
            </p>
          </div>
        </div>
        <button
          onClick={() => setView("history")}
          className="text-gray-600 hover:text-gray-800"
        >
          History
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-9 mb-8">
        {/* Welcome Message */}
        <div className="bg-white rounded-lg p-4 shadow-sm max-w-[80%]">
          <p className="text-gray-800">
            👋 Hello! I'm your company assistant. How can I help you today?
          </p>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t bg-white p-4">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 flex items-center gap-2">
            <BiSend className="h-4 w-4" />
            Send
          </button>
        </div>
      </div>
    </div>
  );

  const HistoryView = () => (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b p-4 flex items-center gap-3">
        <button
          onClick={() => setView("chat")}
          className="text-gray-600 hover:text-gray-800"
        >
          <FaChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="font-semibold">Chat History</h1>
      </div>

      {/* History List */}
      <div className="flex-1 p-4 space-y-3">
        {chatHistory.map((chat) => (
          <div
            key={chat.id}
            className="bg-white rounded-lg p-3 shadow-sm cursor-pointer hover:bg-gray-50"
            onClick={() => setView("chat")}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{chat.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{chat.preview}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {chat.unread && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                )}
                <span className="text-xs text-gray-500">{chat.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return view === "chat" ? <ChatView /> : <HistoryView />;
}

export default ChatUI;
