import { useState } from "react";
import "./header.css";
import TestModal from "./testModal";
import AddModal from "./addModal";

export default function Header(props) {
  const { versionList, rendering } = props;
  const [addModalOpen, setAddModalOpen] = useState(false); // 추가 모달의 열림 여부를 추적하는 상태 변수
  const [testModalOpen, setTestModalOpen] = useState(false); // 테스트 모달의 열림 여부를 추적하는 상태 변수

  const onClickAdd = function () {
    console.log("Add Clicked");
    setAddModalOpen(true); // 추가 모달 열기
  };

  const onClickTest = function () {
    console.log("Test Clicked");
    setTestModalOpen(true); // 테스트 모달 열기
  };

  const closeModal = () => {
    // 모달 닫기
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
      <AddModal
        isModalOpen={addModalOpen}
        toggleModal={closeModal}
        rendering={rendering}
      />
      <TestModal
        isModalOpen={testModalOpen}
        toggleModal={closeModal}
        versionList={versionList}
      />
    </section>
  );
}
