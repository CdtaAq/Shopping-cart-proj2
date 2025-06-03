import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRGenerator = () => {
  const [text, setText] = useState('');

  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter coupon code"
        className="border p-2 mb-4"
      />
      {text && <QRCode value={text} size={256} />}
    </div>
  );
};

export default QRGenerator;