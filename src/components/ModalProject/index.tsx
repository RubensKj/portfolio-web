import React from 'react';

// Components
import Modal from '../Modal';

// Interfaces
import { Project } from '../ProjectCard';
interface IModalProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: () => void;
}

// import { Container } from './styles';

const ModalProject: React.FC<IModalProps> = ({ project, isOpen, setIsOpen }) => {
  return (
    <Modal width='660px' isOpen={isOpen} setIsOpen={setIsOpen}>
      {/* <CovidContent /> */}
      <p>something here</p>
      <p>{project.name}</p>
    </Modal>
  );
}

export default ModalProject;