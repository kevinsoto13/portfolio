import React from 'react';

const RainBackground: React.FC = () => {
  return (
    <div className="lines fixed inset-0 z-0 pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="line"></div>
      ))}
    </div>
  );
};

export default RainBackground;