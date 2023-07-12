import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const TestModal = (props) => {
  const { isModalOpen, toggleModal, versionList } = props;
  const [selectValue, setSelectValue] = useState("ios");
  const [result, setResult] = useState("");

  const selectList =
    versionList &&
    versionList.map((item) => (
      <option value={item.os} key={item.idx}>
        {item.idx}-{item.os}-{item.ver}
      </option>
    ));

  const selectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const getVersion = () => {
    const os = selectValue;
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
        console.log("TestModal ::: " + err);
      });
  };

  const handleConfirm = () => {
    toggleModal();
  };

  return (
    <Modal
      className={"testModal"}
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
    >
      <div>Client Ver</div>
      <form>
        <select onChange={selectChange} value={selectValue}>
          {selectList}
        </select>
        <input type="button" value="제출" onClick={getVersion} />
      </form>
      <div>Server Result</div>
      <textarea value={result} readOnly />
      <button onClick={handleConfirm}>확인</button>
    </Modal>
  );
};

export default TestModal;
