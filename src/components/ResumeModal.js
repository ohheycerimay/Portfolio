import React, { useState } from 'react';
import Modal from 'react-modal';
import Resume from './Resume.pdf';

Modal.setAppElement('#root'); // set the root element for accessibility purposes

function ResumeModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    document.body.style.overflow = 'auto'; // Allow scrolling
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="bg-gray-900 hover:bg-gray-400 duration-300 text-white font-bold py-2 px-4 rounded" onClick={handleModalOpen}>View Resume</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Resume Modal"
        className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
        overlayClassName="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gray-200 bg-opacity-50"
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '50%',
            background: 'white',
            borderRadius: '4px',
            padding: '1rem',
            overflow: 'hidden',
          },
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          <iframe style={{ border: 'none', width: '100%', height: '100%' }} className="w-full h-full" src={Resume}></iframe>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 right-0" onClick={handleModalClose}>Close</button> */}
        </div>
      </Modal>
    </>
  );
}

export default ResumeModal;