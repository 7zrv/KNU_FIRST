import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const TestModal = (props) => {
  const { isModalOpen, toggleModal, versionList } = props;
  const [selectValue, setSelectValue] = useState("");
  const [result, setResult] = useState("");

  const selectList =
    versionList &&
    versionList.map((item) => (
      <option value={item.ver} key={item.idx}>
        {item.idx}-{item.os}-{item.ver}
      </option>
    ));

  const selectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const getVersion = () => {
    const os = selectValue.split("-")[1];
    axios
      .get("http://localhost:8080/api/vercontrol/getConfig", {
        params: {
          os: os,
        },
      })
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleConfirm = () => {
    alert("확인 버튼이 클릭되었습니다.");
  };

  return (
    <Modal
      className={"testModal"}
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
    >
      <div>Client Ver</div>
      <form>
        <select onChange={selectChange}>{selectList}</select>
        <input type="button" value="제출" onClick={getVersion} />
      </form>
      <div>Server Result</div>
      <textarea value={result} readOnly />
      <button onClick={handleConfirm}>확인</button>
    </Modal>
  );
};

export default TestModal;
