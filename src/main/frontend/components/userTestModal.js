import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const UserTestModal = (props) => {
  const { isModalOpen, toggleModal, info } = props;
  const [result, setResult] = useState("");

  const getVersion = () => {
    const os = info.os;
    console.log(os);
    axios
      .post("http://localhost:8080/api/vercontrol/getConfig", {
        os,
      })
      .then((res) => {
        const data = {
          ver: res.data.ver,
          updatetype: res.data.updatetype,
          message: res.data.message,
        };
        setResult(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getVersion();

  const handleConfirm = () => {
    alert("확인 버튼이 클릭되었습니다.");
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
      <textarea className="result" value={result} readOnly />
      <button onClick={handleConfirm}>확인</button>
    </Modal>
  );
};

export default UserTestModal;
