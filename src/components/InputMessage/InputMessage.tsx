import React from 'react';
import { Input ,Button, Flex} from 'antd';
import { SendOutlined } from '@ant-design/icons';
import './InputMessage.css'

interface InputMessageProps {
  value: string; 
  change: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const InputMessage: React.FC<InputMessageProps> = ({ value, change, click }) => {
  return (
    <>
    <Flex  id='flex' gap={'0.5rem'} align='center'>
      
      <Input 
      id='input_message'
      placeholder="Faça uma pergunta para assistente virtual Sonia"
      style={{ width: '90%' }}
      value={value}
      onChange={change} 
    />
    
    <Button
      id='button'
      icon={<SendOutlined/>}
      onClick={click}
      size = 'large'
      disabled={!value.trim()} 
    />

    </Flex>
    
    </>
  );
};

export default InputMessage;

