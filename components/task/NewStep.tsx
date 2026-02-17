"use client"
import { useState } from 'react';

export default function NewStep() {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} placeholder="Enter new text here..." rows={4} cols={50} />
      <p>Current text: {text}</p>
    </div>
  );
}

