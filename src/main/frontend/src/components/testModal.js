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
      <option value={item.idx - item.os} key={item.idx}>
        {item.idx}-{item.os}-{item.ver}
      </option>
    ));

  const selectChange = (e) => {
    setSelectValue(e.target.value.split("-")[1]);
  };

  const getVersion = () => {
    axios
      .post("http://localhost:8080/api/vercontrol/getConfig", {
        os: selectValue,
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
    <Modal className={"testModal"} isOpen={isModalOpen}>
      <div>Client Ver</div>
      <form className="submitForm">
        <select onChange={selectChange} value={selectValue}>
          {selectList}
        </select>
        <button type="button" className="submitBtn" onClick={getVersion}>
          제출
        </button>
      </form>
      <div>Server Result</div>
      <textarea value={result} readOnly />
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

export default TestModal;
