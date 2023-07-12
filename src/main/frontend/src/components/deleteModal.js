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
          <option value={"android"} key={2}>
            android
          </option>
        </select>
      </form>
      <form>
        <input></input>
      </form>
      <form>
        <select onChange={selectUpdateTypeChange} value={selectUpdateType}>
          <option value={"true"} key={1}>
            true
          </option>
          <option value={"false"} key={0}>
            false
          </option>
        </select>
      </form>
      <form>
        <select onChange={selectMessageChange} value={selectMessage}>
          <option value={"This is an update message."} key={1}>
            This is an update message.
          </option>
          <option value={"This is another update message."} key={0}>
            This is another update message.
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
