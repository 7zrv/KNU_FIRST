import React, { useEffect, useState } from "react";
import axios from "axios";

const VersionList = () => {
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
      </tr>
    );
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>idx</th>
            <th>os</th>
            <th>ver</th>
            <th>updatetype</th>
            <th>message</th>
            <th>pacakge</th>
            <th>regdate</th>
          </tr>
          {tableList}
        </thead>
      </table>
    </>
  );
};

export default VersionList;
