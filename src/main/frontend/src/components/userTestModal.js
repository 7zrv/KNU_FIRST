import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const UserTestModal = (props) => {
  const { isModalOpen, toggleModal, info, testResult } = props;

  const handleConfirm = () => {
    toggleModal();
  };

  return (
    <Modal className={"userTestModal"} isOpen={isModalOpen}>
      <div>Client Ver = {`\"${info.os}-${info.ver}\"`}</div>
      <div>Server Result</div>
      <textarea className="result" value={testResult} readOnly />
      <section className="buttons">
        <button className="cancle" onClick={handleConfirm}>
          취소
        </button>
        <button className="ok" onClick={handleConfirm}>
          확인
        </button>
      </section>
    </Modal>
  );
};

export default UserTestModal;
