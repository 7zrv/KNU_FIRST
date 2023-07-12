import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";

const DeleteModal = (props) => {
  const { isModalOpen, toggleModal, info } = props;
  const [selectOS, setSelectOS] = useState("ios");
  const [selectUpdateType, setSelectUpdateType] = useState("1.0");
  const [selectMessage, setSelectMessage] = useState(
    "This is an update message."
  );

  console.log(info);

  const selectOsChange = (e) => {
    setSelectOS(e.target.value);
  };
  const selectUpdateTypeChange = (e) => {
    setSelectUpdateType(e.target.value);
  };
  const selectMessageChange = (e) => {
    setSelectMessage(e.target.value);
  };

  const onClickCancle = function () {
    toggleModal();
  };

  const onClickDelete = function (e) {
    toggleModal();
    console.log(e.target.parentElement.parentElement);
    const element = document.getElementById(info.idx).parentElement;
    element.remove();
    axios
      .delete(`http://localhost:8080/api/vercontrol/delete/${info.idx}`)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log("DeleteModal ::: " + err);
        return err;
      });
  };

  return (
    <Modal
      className={"addModal"}
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
    >
      <form>
        <select onChange={selectOsChange} value={selectOS}>
          <option value={info.os} key={1}>
            {info.os}
          </option>
        </select>
      </form>
      <form>
        <input value={info.ver} readOnly></input>
      </form>
      <form>
        <select onChange={selectUpdateTypeChange} value={selectUpdateType}>
          <option value={info.updatetype} key={1}>
            {info.updatetype}
          </option>
        </select>
      </form>
      <form>
        <select onChange={selectMessageChange} value={selectMessage}>
          <option value={info.message} key={1}>
            {info.message}
          </option>
        </select>
      </form>
      <section className="buttons">
        <button className="cancle" onClick={onClickCancle}>
          취소
        </button>
        <button className="delete" onClick={onClickDelete}>
          삭제
        </button>
      </section>
    </Modal>
  );
};

export default DeleteModal;
