// components/ToastAlert.tsx
import React, { useEffect, useState } from 'react';

interface ToastProps {
  text: string;
  icon?: React.ReactElement;
}

const ToastAlert: React.FC<ToastProps> = ({ text, icon }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;
  const toast = {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '2px',
    border: '1px solid var(--Gray---30, rgba(26, 26, 26, 0.30))',
    background: 'var(--black-100, #242A30)',
    maxWidth: '376px',
height: '51px',
alignItems: 'center',
  };
const toastText ={
    color: 'var(--Off-White, #F6F8FA)',
fontFamily: 'SF Pro Text',
fontSize: '14px',
fontStyle: 'normal',
marginLeft: icon ? '8px': '16px',
fontWeight: '400',
lineHeight: '150%' /* 21px */
}
const toastClose ={
    marginRight: '16px'
}
  return (
    <div style={toast}>
      {icon && <div className="toast-icon">{icon}</div>}
      <div style={toastText}>{text}</div>
      <div style={toastClose} onClick={() => setVisible(false)}>X</div>
      <style jsx>{`
       
      `}</style>
    </div>
  );
};

export default ToastAlert;
