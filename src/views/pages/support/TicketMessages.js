import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import config from 'src/config';
import axios from 'axios';

function TicketMessages() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [title, setTitle] = useState('');
  const token = localStorage.getItem('vendorToken');
  const messagesEndRef = useRef(null);

  const handleSolved = () => {};

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSend = async () => {
    try {
      const response = await axios.post(
        `${config.baseURL}/vendor/settings/support-tickets/messages/${id}`,
        {
          message: input,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setInput('');
      getMessages();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    try {
      const response = await axios.get(
        `${config.baseURL}/vendor/settings/support-tickets/${id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      setTitle(response.data.title);
      setMessages(response.data.messages);
      scrollToBottom(); // Scroll to bottom after updating messages
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="rounded bg-white p-3 shadow md:p-8 mb-8 flex flex-row items-center justify-between">
        <div className="md:w-1/4">
          <h2 className=" relative text-lg font-semibold text-heading">{title}</h2>
        </div>
        <div>
          <button
            onClick={handleSolved}
            className="border p-2 rounded-md bg-slate-200 hover:bg-slate-100 font-normal"
          >
            Mark As Resolved
          </button>
        </div>
      </div>

      <div className="relative rounded p-5 shadow md:p-8 mb-2 w-1/2 bg-white">
        <div className="overflow-y-auto max-h-80 mb-5">
          {messages?.map((message, index) => (
            <div
              key={index}
              className={`p-3 mb-2 rounded ${
                message.sender === 'vendor'
                  ? 'ml-auto bg-blue-500 w-64 text-white'
                  : 'mr-auto bg-gray-300'
              }`}
            >
              {message.message}
            </div>
          ))}
          <div ref={messagesEndRef} /> 
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 shadow md:p-8 bg-white">
          <div className="flex justify-between">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Send Your Message"
              className="w-full lg:w-96 py-1 px-2 border  border-gray-300 rounded focus:outline-blue-400"
            />
            <button
              onClick={handleSend}
              className="border px-4 py-1 rounded-md ml-2 hover:bg-slate-200"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketMessages;
