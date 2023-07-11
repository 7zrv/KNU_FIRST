import React, { useEffect, useState } from "react";
import axios from "axios";
import "./versionList.css";
const VersionList = () => {
  const tempData = (
    <section className="record">
      <tr key="1">
        <td>1</td>
        <td>iOS</td>
        <td>1.0</td>
        <td>true</td>
        <td>null</td>
        <td>com.test.myApp</td>
        <td>2023-01-01</td>
        <td>
          <button className="testBtn">Test</button>
          <button className="modBtn">수정</button>
          <button className="delBtn">삭제</button>
        </td>
      </tr>
    </section>
  );

  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("/api/vercontrol/getConfigAll")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        return err;
      });
  });
  const tableList = list.map((item) => {
    return (
      <tr key={item.idx}>
        <td>{item.idx}</td>
        <td>{item.os}</td>
        <td>{item.ver}</td>
        <td>{item.updatetype}</td>
        <td>{item.message}</td>
        <td>{item.pacakge}</td>
        <td>{item.regdate}</td>
        <td>
          <button>Test</button>
          <button>수정</button>
          <button>삭제</button>
        </td>
      </tr>
    );
  });
  return (
    <section>
      <table>
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
          {tempData}
        </thead>
      </table>
    </section>
  );
};

export default VersionList;
