import { Component, useState } from "react";
import "./header.css";
import Modal from "./modal";

export default function Header(props) {
  const [openTest, setOpenTest] = useState(false);
  const { versionList } = props;
  const onClickAdd = function () {
    console.log("Add Clicked");
  };
  const onClickTest = function () {
    console.log("Test Clicked");
    setOpenTest(!openTest);
  };

  return (
    <section className="headerBar">
      <button className="addBtn" onClick={onClickAdd}>
        ADD
      </button>
      <button className="testBtn" onClick={onClickTest}>
        APP TEST
      </button>
      {openTest ? (
        <Modal versionList={versionList} setOpenTest={setOpenTest} />
      ) : null}
    </section>
  );
}
