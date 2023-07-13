import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VersionList.css";
import Header from "./header";
import DeleteModal from "./deleteModal";
import UserTestModal from "./userTestModal";
import ModifyModal from "./modifyModal";

const VersionList = () => {
  const [list, setList] = useState([]); // 버전 목록을 저장하는 상태 변수
  const [deleteModalOpen, setDeleteModalOpen] = useState(false); // 삭제 모달의 열림 여부를 추적하는 상태 변수
  const [itemInfos, setItemInfos] = useState({}); // 선택한 항목에 대한 정보를 저장하는 상태 변수
  const [userTestModalOpen, setUserTestModalOpen] = useState(false); // 사용자 테스트 모달의 열림 여부를 추적하는 상태 변수
  const [testResult, setTestResult] = useState(""); // 사용자 테스트 결과를 저장하는 상태 변수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호를 추적하는 상태 변수
  const [maxPage, setMaxPage] = useState(1);
  const [modifyModalOpen, setModifyModalOpen] = useState(false); // 수정 모달의 열림 여부를 추적하는 상태 변수

  useEffect(() => {
    // 컴포넌트가 마운트될 때 버전 목록을 가져오기 위해 axios를 사용하여 API 호출
    axios
      .post("http://localhost:8080/api/vercontrol/page", {
        page: currentPage - 1,
      })
      .then((res) => {
        setList(res.data.content);
        setMaxPage(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  const rendering = () => {
    // 버전 목록을 다시 가져오기 위해 API를 호출
    axios
      .post("http://localhost:8080/api/vercontrol/page", {
        page: currentPage - 1,
      })
      .then((res) => {
        setList(res.data.content);
        setMaxPage(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  };

  const onClickUserTestBtn = function (e) {
    // 레코드 테스트 버튼 클릭 이벤트 처리
    const trElement = e.currentTarget.parentNode.parentNode;
    const tdElements = Array.from(trElement.querySelectorAll("td"));

    // 선택한 행에서 항목 정보 추출
    const itemInfos = {
      idx: tdElements[0].id,
      os: tdElements[1].id,
      ver: tdElements[2].id,
      updatetype: tdElements[3].id,
      message: tdElements[4].id,
      packagePath: tdElements[5].id,
      regdate: tdElements[6].id,
    };
    setItemInfos(itemInfos);

    console.log(itemInfos);

    // 레코드 테스트 진행을 위해 getConfig API 호출
    axios
      .post("http://localhost:8080/api/vercontrol/test", {
        os: itemInfos.os,
        ver: itemInfos.ver,
      })
      .then((res) => {
        setTestResult(JSON.stringify(res.data)); // 테스트 결과를 문자열로 변환
      })
      .catch((err) => {
        console.log("UserTest ::: " + err);
      });
    setUserTestModalOpen(true); // 사용자 테스트 모달 열기
  };

  const onClickDeleteBtn = function (e) {
    /**
     * 삭제할 레코드의 정보를 itemInfos에 넣어준다.
     * itemInfos에 들어있는 레코드 정보를 deleteModal로 넘겨줌.
     * 실제 삭제는 deleteModal에서 진행된다.
     * */
    const trElement = e.currentTarget.parentNode.parentNode;
    const tdElements = Array.from(trElement.querySelectorAll("td"));

    const itemInfos = {
      idx: tdElements[0].id,
      os: tdElements[1].id,
      ver: tdElements[2].id,
      updatetype: tdElements[3].id,
      message: tdElements[4].id,
      packagePath: tdElements[5].id,
      regdate: tdElements[6].id,
    };

    setItemInfos(itemInfos);

    setDeleteModalOpen(true); // 삭제 모달 열기
  };

  const onClickModifyBtn = function (e) {
    /**
     * 수정할 레코드의 정보를 itemInfos에 넣어준다.
     * itemInfos에 들어있는 레코드 정보를 modifyModal로 넘겨줌.
     * 실제 수정은 modifyModal에서 진행된다.
     * */
    const trElement = e.currentTarget.parentNode.parentNode;
    const tdElements = Array.from(trElement.querySelectorAll("td"));

    const itemInfos = {
      idx: tdElements[0].id,
      os: tdElements[1].id,
      ver: tdElements[2].id,
      updatetype: tdElements[3].id,
      message: tdElements[4].id,
      packagePath: tdElements[5].id,
      regdate: tdElements[6].id,
    };

    setItemInfos(itemInfos);

    setModifyModalOpen(true); // 수정 모달 열기
  };

  const closeModal = function () {
    // 열려있는 모달 닫기
    if (deleteModalOpen) setDeleteModalOpen(false);
    if (userTestModalOpen) setUserTestModalOpen(false);
    if (modifyModalOpen) setModifyModalOpen(false);
  };

  /**
   * pageList에 들어있는 정보들을 레코드 형태로 변환하여 담아놓은 array
   */
  const tableList = list.map((item) => {
    let backgroundColor = "gainsboro";
    if (item.idx % 2 === 0) {
      backgroundColor = "lightblue";
    }
    return (
      <tr
        id={item.idx}
        className="record"
        style={{
          background: backgroundColor,
        }}
      >
        <td id={item.idx}>{item.idx}</td>
        <td id={item.os}>{item.os}</td>
        <td id={item.version}>{item.version}</td>
        <td id={item.updatetype}>{item.updatetype}</td>
        <td id={item.message}>{item.message}</td>
        <td id={item.packagePath}>{item.packagePath}</td>
        <td
          id={`${item.regdate[0]} / ${item.regdate[1]} / ${item.regdate[2]}`}
        >{`${item.regdate[0]} / ${item.regdate[1]} / ${item.regdate[2]}`}</td>
        <td className="buttons">
          <button className="testBtn" onClick={onClickUserTestBtn}>
            테스트
          </button>
          <button className="modBtn" onClick={onClickModifyBtn}>
            수정
          </button>
          <button className="deleteBtn" onClick={onClickDeleteBtn}>
            삭제
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Header versionList={list} rendering={rendering} />
      <section className="tableSection">
        <table className="table">
          <thead className="tableContainer">
            <tr className="tableHeader">
              <th>idx</th>
              <th>os</th>
              <th>ver</th>
              <th>updatetype</th>
              <th>message</th>
              <th>pacakge</th>
              <th>regdate</th>
              <th>action</th>
            </tr>
            {tableList}
          </thead>
        </table>
      </section>
      <UserTestModal
        isModalOpen={userTestModalOpen}
        toggleModal={closeModal}
        info={itemInfos}
        testResult={testResult}
      ></UserTestModal>
      <ModifyModal
        isModalOpen={modifyModalOpen}
        toggleModal={closeModal}
        info={itemInfos}
        items={list}
        setInfo={setItemInfos}
        rendering={rendering}
      />
      <DeleteModal
        isModalOpen={deleteModalOpen}
        toggleModal={closeModal}
        info={itemInfos}
        rendering={rendering}
      ></DeleteModal>
      <section className="pageSection">
        <button
          className="previousBtn"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          &lt;
        </button>
        <span className="currentPage">
          {" "}
          {currentPage} / {maxPage}{" "}
        </span>
        <button
          className="nextBtn"
          onClick={() => {
            if (currentPage < maxPage) {
              setCurrentPage(currentPage + 1);
            }
            console.log(currentPage);
          }}
        >
          &gt;
        </button>
      </section>
    </div>
  );
};

export default VersionList;
