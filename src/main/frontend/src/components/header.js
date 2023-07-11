import "./header.css";

export default function Header() {
  const onClickAdd = function () {
    console.log("Add Clicked");
  };
  const onClickTest = function () {
    console.log("Test Clicked");
  };

  return (
    <section className="headerBar">
      <button className="addBtn" onClick={onClickAdd}>
        ADD
      </button>
      <button className="testBtn" onClick={onClickTest}>
        APP TEST
      </button>
    </section>
  );
}
