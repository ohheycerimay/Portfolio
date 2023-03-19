import React, { useState } from 'react'
import CeriMay from './CeriMay.png'

function Modal() {
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleOpenModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <button onClick={handleOpenModal}>⌖</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              X
            </button>
            Hi! I'm available for hire!
            <img src={CeriMay} />
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
