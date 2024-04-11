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
    zIndex: 9999, // Higher z-index to ensure modal appears above other elements

  },
};

interface ModalComponentProps {
  isOpen: boolean;
  closeModal: () => void;
  selectedIndex: number;
}

const demoData = [
  {
    date: '18th April 2024',
    venue: 'R 206, R block, Vasavi College of Engineering, Ibrahimbagh, Hyderabad',
    registrationFee: 'Rs. 150/- per Team',
    teamSize: '1-2',
    prizePool: 'Rs. 2500',
    description: 'The official meaning of “Webathon” is “a fundraising event carried out by means of the World Wide Web” which runs on a 2-day workshop basis. The students were given one class to prepare all the necessary materials & assets for the main event for which they were divided into 9 groups.'
  },
  {
    date: '18th April 2024',
    venue: 'R 206, R block, Vasavi College of Engineering, Ibrahimbagh, Hyderabad',
    registrationFee: 'Rs. 150/- per Team',
    teamSize: '1-2',
    prizePool: 'Rs. 2500',
    description: 'The  meaning of “Webathon” is “a fundraising event carried out by means of the World Wide Web” which runs on a 2-day workshop basis. The students were given one class to prepare all the necessary materials & assets for the main event for which they were divided into 9 groups.'
  },
  {
    date: '18th April 2024',
    venue: 'R 206, R block, Vasavi College of Engineering, Ibrahimbagh, Hyderabad',
    registrationFee: 'Rs. 150/- per Team',
    teamSize: '1-2',
    prizePool: 'Rs. 2500',
    description: 'The official meaning of “Webathon” is “a fundraising event carried out by means of the World Wide Web” which runs on a 2-day workshop basis. The students were given one class to prepare all the necessary materials & assets for the main event for which they were divided into 9 groups.'
  },
];

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, closeModal, selectedIndex }) => {
  const selectedDetails = demoData[selectedIndex]; // Get details based on selected index

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 999999 }} className='overflow-hidden'>
        <h2>Date: {selectedDetails.date}</h2>
        <h3>Venue: {selectedDetails.venue}</h3>
        <p>Registration Fee: {selectedDetails.registrationFee}</p>
        <p>Team size: {selectedDetails.teamSize}</p>
        <p>Prize pool: {selectedDetails.prizePool}</p>
        <p>Description: {selectedDetails.description}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};
export default ModalComponent;
