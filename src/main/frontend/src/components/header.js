import { Component, useState } from "react";
import "./header.css";
import TestModal from "./testModal";
import AddModal from "./addModal";

export default function Header(props) {
  const { versionList } = props;
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [testModalOpen, setTestModalOpen] = useState(false);
  const onClickAdd = function () {
    console.log("Add Clicked");
    setAddModalOpen(true);
  };
  const onClickTest = function () {
    console.log("Test Clicked");
    setTestModalOpen(true);
  };
  const closeModal = () => {
    if (addModalOpen) {
      setAddModalOpen(!addModalOpen);
    }
    if (testModalOpen) {
      setTestModalOpen(!testModalOpen);
    }
  };

  return (
    <section className="headerBar">
      <button className="addBtn" onClick={onClickAdd}>
        ADD
      </button>
      <button className="testBtn" onClick={onClickTest}>
        APP TEST
      </button>
      <AddModal isModalOpen={addModalOpen} toggleModal={closeModal} />
      <TestModal
        isModalOpen={testModalOpen}
        toggleModal={closeModal}
        versionList={versionList}
      />
    </section>
  );
}
