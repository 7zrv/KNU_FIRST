import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const UserTestModal = (props) => {
  const { isModalOpen, toggleModal, info, testResult } = props;

  const handleConfirm = () => {
    toggleModal();
  };

  return (
    <Modal
      className={"userTestModal"}
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
    >
      <div>Client Ver = {info.os}</div>
      <div>Server Result</div>
      <textarea className="result" value={testResult} readOnly />
      <button onClick={handleConfirm}>확인</button>
    </Modal>
  );
};

export default UserTestModal;
