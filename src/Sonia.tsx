import { Image } from 'antd';
import './Sonia.css'
import { useState } from 'react';
import React from 'react';
import InputMessage from './components/InputMessage/InputMessage.tsx'
import Layout, { Content, Header } from 'antd/es/layout/layout';

const functionUrl = ""

type Message = {
  text: string,
  sender: 'sonia' | 'user'
};

export function Sonia() {

  const [newInputValue, setNewInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [showImage, setShowImage] = useState(true); 

  const newMessage: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setNewInputValue('');
    const newMessages: Message[] = [
      ...messages, {
        text: newInputValue,
        sender: 'user'
      }
    ];
    const response = await fetch(functionUrl, {
      method: 'POST',
      body: JSON.stringify({ messages: newMessages })
    });
    setMessages([...newMessages, {
      sender: 'sonia',
      text: await response.text()
    }]);
    setMessages(newMessages);

    setShowImage(false);
  };

  return (
    <>
    
      <Layout>
      
      <Header id='header'></Header>

      <Content className="Sonia">
      
        {showImage && (
          <div className="image-title-container">
            <Image
              style={{ width: 170, height: 170, borderRadius: '50%' }}
              src="/sonia2.png"
            />
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>Pergunte para Sonia</h2>
          </div>
        )}

        <div className="messages-container">
          {messages.map((message, index) => (
            <p key={index} className={'message ' + message.sender}>
              {message.text}
            </p>
          ))}
        </div>

        <form className="input-form" >
          <InputMessage value={newInputValue} change={e => setNewInputValue(e.currentTarget.value)} click={newMessage}></InputMessage>
        </form>

      </Content>

      </Layout>
   
    </>
  );
}
