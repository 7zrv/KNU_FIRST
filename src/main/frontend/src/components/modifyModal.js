import React, { useState } from "react";
import Modal from "react-modal";

const ModifyModal = (props) => {
  const { currentItem, items, type } = props;
  const { isModalOpen, toggleModal } = props;
  const [form, setForm] = useState({
    os: currentItem.os,
    ver: currentItem.ver,
    updatetype: currentItem.updatetype,
    message: currentItem.message,
  });
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
    setForm({
      ...form,
      [name]: value,
    });
  };
  const modalContent = () => {
    return (
      <Modal>
        <select name="os">{osOption}</select>
        <textarea name="ver">{form.ver}</textarea>
        <select name="updatetype" onChange={handleChange}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <textarea name="message" onChange={handleChange}>
          {form.message}
        </textarea>
      </Modal>
    );
  };
  return <Modal></Modal>;
};

export default ModifyModal;
