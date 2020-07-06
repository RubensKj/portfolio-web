import React, { useState } from 'react';

// Components
import Modal from '../Modal';

import { Header, Dot } from './styles';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
};

const ModalPrototype: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {

  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  function toggleFullscreen() {
    setIsFullscreen(!isFullscreen);
  }

  return (
    <Modal width={!isFullscreen ? '684px' : '1280px'} isOpen={isOpen} setIsOpen={setIsOpen}>
      <Header>
        <Dot onClick={setIsOpen} color="#fc615d" hoverColor="#d04f4c" />
        <Dot onClick={toggleFullscreen} color="#fdbc40" hoverColor="#ca9736" />
        <Dot color="#35c749" hoverColor="#2d9e3d" />
      </Header>
      {children}
    </Modal>
  );
}

export default ModalPrototype;