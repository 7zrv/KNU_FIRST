import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VersionList.css";
import Header from "./header";
import DeleteModal from "./deleteModal";
import UserTestModal from "./userTestModal";

const VersionList = () => {
  const [list, setList] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemInfos, setItemInfos] = useState({});
  const [userTestModalOpen, setUserTestModalOpen] = useState(false);
  const [testResult, setTestResult] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/vercontrol/getConfigAll")
      .then((res) => {
        setList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("VersionList ::: " + err);
        return err;
      });
  }, []);

  const onClickUserTestBtn = function (e) {
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
    axios
      .post("http://localhost:8080/api/vercontrol/getConfig", {
        os: itemInfos.os,
      })
      .then((res) => {
        const data = {
          ver: res.data.ver,
          updatetype: res.data.updatetype,
          message: res.data.message,
        };
        setTestResult(JSON.stringify(data));
      })
      .catch((err) => {
        console.log("UserTest ::: " + err);
      });
    setUserTestModalOpen(true);
  };

  const onClickDeleteBtn = function (e) {
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
    setDeleteModalOpen(true);
  };

  const closeModal = function () {
    if (deleteModalOpen) setDeleteModalOpen(false);
    if (userTestModalOpen) setUserTestModalOpen(false);
  };

  const tableList = list.map((item) => {
    let backgroundColor = "gainsboro";
    if (item.idx % 2 === 0) {
      backgroundColor = "lightblue";
    }
    return (
      <tr
        key={item.idx}
        className="record"
        style={{
          background: backgroundColor,
        }}
      >
        <td id={item.idx}>{item.idx}</td>
        <td id={item.os}>{item.os}</td>
        <td id={item.ver}>{item.ver}</td>
        <td id={item.updatetype}>{item.updatetype}</td>
        <td id={item.message}>{item.message}</td>
        <td id={item.packagePath}>{item.packagePath}</td>
        <td
          id={`${item.regdate[0]} / ${item.regdate[1]} / ${item.regdate[2]}`}
        >{`${item.regdate[0]} / ${item.regdate[1]} / ${item.regdate[2]}`}</td>
        <td className="buttons">
          <button className="testBtn" onClick={onClickUserTestBtn}>
            Test
          </button>
          <button className="modBtn">수정</button>
          <button className="deleteBtn" onClick={onClickDeleteBtn}>
            삭제
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <Header versionList={list} />
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
      <DeleteModal
        isModalOpen={deleteModalOpen}
        toggleModal={closeModal}
        info={itemInfos}
      ></DeleteModal>
    </div>
  );
};

export default VersionList;
