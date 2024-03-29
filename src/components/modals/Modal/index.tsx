import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

interface IModalProps {
  children: any;
  width?: string;
  cardBackground?: string;
  backgroundColor?: string;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, width = '520px', cardBackground = '#23212b', backgroundColor = 'rgba(18, 18, 20, 0.1)', isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '52%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: cardBackground,
          borderRadius: '4px',
          maxWidth: width,
          width: '95%',
          border: 'none',
          padding: '5px 15px',
          boxShadow: '0px 8px 19px 2px rgba(0,0,0,0.2)',
          transition: '0.2s max-width',
          zIndex: 125,
          maxHeight: '80%'
        },
        overlay: {
          backgroundColor: backgroundColor,
        },
      }}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;