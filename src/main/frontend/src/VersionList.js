import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VersionList.css";
import Header from "./components/header";

const VersionList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("dd");
    axios
      .get("http://localhost:8080/api/vercontrol/getConfigAll")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }, []);
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
        <td>{item.idx}</td>
        <td>{item.os}</td>
        <td>{item.ver}</td>
        <td>{item.updatetype}</td>
        <td>{item.message}</td>
        <td>{item.packagePath}</td>
        <td>{`${item.regdate[0]} / ${item.regdate[1]} /${item.regdate[2]}`}</td>
        <td className="buttons">
          <button className="testBtn">Test</button>
          <button className="modBtn">수정</button>
          <button className="deleteBtn">삭제</button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      {list.length > 0 && <Header versionList={list} />}
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
    </div>
  );
};

export default VersionList;
