// src/app/ModalComponent.tsx
import React from 'react';
import Modal from 'react-modal';

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface ModalComponentProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, closeModal }) => {
  const subtitleRef = React.useRef<HTMLHeadingElement>(null);

  const afterOpenModal = () => {
    if (subtitleRef.current) {
      subtitleRef.current.style.color = '#f00';
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 ref={subtitleRef}>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  );
};

export default ModalComponent;
