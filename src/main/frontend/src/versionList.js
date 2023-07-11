import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VersionList.css";
const VersionList = () => {
  const onClickTestBtn = function () {
    console.log("Test button clicked");
  };
  const onClickModBtn = function () {
    console.log("Mod button clicked");
  };
  const onClickDelBtn = function () {
    console.log("Del button clicked");
  };

  const dummy = [
    {
      idx: "1",
      os: "iOS",
      ver: "1.0",
      updatetype: "true",
      message: "null",
      package: "com.test.myApp",
      regdate: "2023-01-01",
    },
    {
      idx: "2",
      os: "iOS",
      ver: "1.0",
      updatetype: "true",
      message: "null",
      package: "com.test.myApp",
      regdate: "2023-01-01",
    },
    {
      idx: "3",
      os: "iOS",
      ver: "1.0",
      updatetype: "true",
      message: "null",
      package: "com.test.myApp",
      regdate: "2023-01-01",
    },
    {
      idx: "4",
      os: "iOS",
      ver: "1.0",
      updatetype: "true",
      message: "null",
      package: "com.test.myApp",
      regdate: "2023-01-01",
    },
  ];

  const [list, setList] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/api/vercontrol/getConfigAll")
  //     .then((res) => {
  //       setList(res.data);
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  // });

  useEffect(() => {
    console.log("실행");
    setList(dummy);
  }, []);

  const tableList = list.map((item) => {
    let bgColor = "red";
    if (list.indexOf(item) % 2 === 1) {
      bgColor = "cadetblue";
    } else {
      bgColor = "gainsboro";
    }
    return (
      <section className="record" style={{ backgroundColor: bgColor }}>
        <tr key={item.idx}>
          <td>{item.idx}</td>
          <td>{item.os}</td>
          <td>{item.ver}</td>
          <td>{item.updatetype}</td>
          <td>{item.message}</td>
          <td>{item.pacakge}</td>
          <td>{item.regdate}</td>
          <td>
            <button className="testBtn" onClick={onClickTestBtn}>
              Test
            </button>
            <button className="modBtn" onClick={onClickModBtn}>
              수정
            </button>
            <button className="delBtn" onClick={onClickDelBtn}>
              삭제
            </button>
          </td>
        </tr>
      </section>
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
          {tableList}
        </thead>
      </table>
    </section>
  );
};

export default VersionList;
