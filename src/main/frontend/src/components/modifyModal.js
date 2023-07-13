import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const ModifyModal = (props) => {
  const { isModalOpen, toggleModal, info, items, setInfo, rendering } = props;
  const osList = items.map((item) => {
    return item.os;
  });
  const osSet = new Set(osList);
  const osArray = Array.from(osSet);
  const osOption = osArray.map((item) => {
    return <option value={item}>{item}</option>;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
    console.log(value);
    console.log(info);
  };
  const onClickCancle = () => {
    toggleModal();
  };

  const onClickModify = () => {
    toggleModal();
    axios
      .put(`http://localhost:8080/api/vercontrol/update/${info.idx}`, {
        os: info.os,
        version: info.ver,
        updatetype: info.updatetype,
        message: info.message,
      })
      .then((res) => {
        console.log("Modified");
        rendering();
      })
      .catch((err) => console.log("Modify ERR ::: " + err));
  };
  return (
    <Modal className={"modifyModal"} isOpen={isModalOpen}>
      <select className="selectOS" name="os" onChange={handleChange}>
        {osOption}
      </select>
      <textarea name="ver" onChange={handleChange}>
        {info.ver}
      </textarea>
      <select name="updatetype" onChange={handleChange}>
        <option value="none" disabled selected>
          none
        </option>
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
