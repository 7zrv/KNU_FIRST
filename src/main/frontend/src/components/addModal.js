import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";

const AddModal = (props) => {
  const { isModalOpen, toggleModal, rendering } = props;

  // 상태 변수 초기화
  const [selectOS, setSelectOS] = useState("ios");
  const [selectVersion, setSelectVersion] = useState("");
  const [selectUpdateType, setSelectUpdateType] = useState("false");
  const [selectMessage, setSelectMessage] = useState(
    "This is an update message."
  );
  const [minVersion, setMinVersion] = useState("");

  const selectOsChange = (e) => {
    setSelectOS(e.target.value);
  };

  const selectVersionChange = (e) => {
    setSelectVersion(e.target.value);
  };

  const selectMessageChange = (e) => {
    setSelectMessage(e.target.value);
  };

  const selectMinVersionChange = (e) => {
    setMinVersion(e.target.value);
  };

  const validAdd = async function () {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/vercontrol/getConfig",
        {
          os: selectOS,
        }
      );

      if (parseFloat(response.data.ver) < parseFloat(selectVersion)) {
        console.log(
          `Current Ver :: ${parseFloat(
            response.data.ver
          )} //// Add Ver :: ${parseFloat(selectVersion)}  =>> ${
            parseFloat(response.data.ver) < parseFloat(selectVersion)
          }`
        );
        return true;
      } else {
        console.log(
          `Current Ver :: ${parseFloat(
            response.data.ver
          )} //// Add Ver :: ${parseFloat(selectVersion)}  =>> ${
            parseFloat(response.data.ver) < parseFloat(selectVersion)
          }`
        );
        return false;
      }
    } catch (err) {
      console.log(err.request.status);
      if (err.request.status === 500) {
        return true;
      } else {
        return false;
      }
    }
  };

  const onClickOk = async function () {
    toggleModal();

    const isValid = await validAdd(); // validAdd 함수의 결과를 기다립니다.

    if (isValid) {
      axios
        .post("http://localhost:8080/api/vercontrol/add", {
          os: selectOS,
          ver: selectVersion,
          updatetype: selectUpdateType,
          message: selectMessage,
          packagePath: "/path/to/package",
          minVersion: minVersion,
        })
        .then((res) => {
          console.log("AddModal Complete");
          rendering();
        })
        .catch((err) => console.log("AddModal ::: " + err));
    }
  };

  const onClickNo = function () {
    toggleModal();
  };

  return (
    <Modal
      className={"addModal"}
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
    >
      <form>
        <select onChange={selectOsChange} value={selectOS}>
          <option value={"ios"} key={1}>
            ios
          </option>
          <option value={"android"} key={2}>
            android
          </option>
        </select>
      </form>
      <form>
        <input
          onChange={selectMinVersionChange}
          value={minVersion}
          placeholder="Enter minimum version..."
        ></input>
      </form>
      <form>
        <input
          onChange={selectVersionChange}
          value={selectVersion}
          placeholder="Enter update version..."
        ></input>
      </form>
      <form>
        <select onChange={selectMessageChange} value={selectMessage}>
          <option value={"This is an update message."} key={1}>
            This is an update message.
          </option>
          <option value={"This is another update message."} key={0}>
            This is another update message.
          </option>
        </select>
      </form>
      <section className="buttons">
        <button className="no" onClick={onClickNo}>
          취소
        </button>
        <button className="ok" onClick={onClickOk}>
          확인
        </button>
      </section>
    </Modal>
  );
};

export default AddModal;
