import React, { useState } from "react";
import Modal from "react-modal";

const ModifyModal = (props) => {
  const { isModalOpen, toggleModal, info, items, setInfo } = props;
  console.log(info);
  console.log(items);
  const osList = items.map((item) => {
    return item.os;
  });
  const osSet = new Set(osList);
  const osArray = Array.from(osSet);
  const osOption = osArray.map((item) => {
    return <option value={item}>{item}</option>;
  });
  console.log(osOption);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const onClickCancle = () => {};
  const onClickModify = () => {
    axios.put(`http://localhost:8080/api/vercontrol/update/${info.idx}`, info);
  };
  return (
    <Modal
      className={"addModal"}
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
    >
      <select name="os" onChange={handleChange}>
        {osOption}
      </select>
      <textarea name="ver" onChange={handleChange}>
        {info.ver}
      </textarea>
      <select name="updatetype" onChange={handleChange}>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <textarea name="message" onChange={handleChange}>
        {info.message}
      </textarea>
      <section className="buttons">
        <button className="cancle" onClick={onClickCancle}>
          취소
        </button>
        <button className="delete" onClick={onClickModify}>
          수정
        </button>
      </section>
    </Modal>
  );
};

export default ModifyModal;
