import React, { useState } from "react";
import { Image } from "antd";
import Layout, { Content, Header } from "antd/es/layout/layout";
import InputMessage from "../../components/InputMessage/InputMessage";
import "./Sonia.css";

const functionUrl = "";

type Message = {
  text: string;
  sender: "sonia" | "user";
};

export default function Sonia() {
  const [newInputValue, setNewInputValue] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [showImage, setShowImage] = useState<boolean>(true);

  const newMessage: React.FormEventHandler = async (e) => {
    e.preventDefault();

    if (!newInputValue.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      {
        text: newInputValue,
        sender: "user",
      },
    ];

    setMessages(newMessages);
    setNewInputValue("");

    try {
      const response = await fetch(functionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error("Erro na API");
      }

      const responseText = await response.text();

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "sonia",
          text: responseText,
        },
      ]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "sonia",
          text: "Desculpe, ocorreu um erro ao buscar a resposta.",
        },
      ]);
    } finally {
      setShowImage(false);
    }
  };

  return (
    <Layout>
      <Header id="header"></Header>

      <Content className="Sonia">
        {showImage && (
          <div className="image-title-container">
            <Image
              style={{ width: 170, height: 170, borderRadius: "50%" }}
              src="/sonia2.png"
              alt="Sonia"
            />
            <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: "400" }}>
              Pergunte para Sonia
            </h2>
          </div>
        )}

        <div className="messages-container">
          {messages.map((message, index) => (
            <p key={index} className={`message ${message.sender}`}>
              {message.text}
            </p>
          ))}
        </div>

        <form className="input-form" onSubmit={newMessage}>
          <InputMessage
            value={newInputValue}
            change={(e) => setNewInputValue(e.currentTarget.value)}
            click={newMessage}
          />
        </form>
      </Content>
    </Layout>
  );
}
