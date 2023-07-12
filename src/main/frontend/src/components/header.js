import { Component, useState } from "react";
import "./header.css";
import TestModal from "./testModal";

export default function Header(props) {
  const { versionList } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickAdd = function () {
    console.log("Add Clicked");
  };
  const onClickTest = function () {
    console.log("Test Clicked");
    setIsModalOpen(true);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="headerBar">
      <button className="addBtn" onClick={onClickAdd}>
        ADD
      </button>
      <button className="testBtn" onClick={onClickTest}>
        APP TEST
      </button>
      <TestModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        versionList={versionList}
      />
    </section>
  );
}
