import React from "react";
import axios from "axios";

const Modal = (props) => {
  const { versionList, setOpenTest } = props;
  const [selectValue, setSelectValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const selectList =
    versionList ||
    versionList.map((item) => {
      return (
        <option value={item.ver}>
          {item.idx}-{item.os}-{item.ver}
        </option>
      );
    });
  const onClick = () => {
    setOpenTest(false);
  };
  const selectChange = (e) => {
    setSelectValue(e.target.value);
  };
  const getVersion = (e) => {
    const os = selectValue.split("-")[1];
    axios
      .get("localhost:8080/api/vercontrol/getConfig", {
        params: {
          os: os,
        },
      })
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
  return (
    <section class="modal" onChange={selectChange}>
      <div>Cient ver</div>

      <form>
        <select>{versionList}</select>
        <input type="button" value="제출" onClick={getVersion} />
      </form>
      <div>Sever Result</div>
      <textarea value={result} />
      <button onClick={onClick}>확인</button>
    </section>
  );
};

export default Modal;
