// 8- add useHistory
import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();

  // 8- to render page1DetailA
  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>PAGE 1</h1>
      {/* 7- put "/page1/detailA" into {{...}} */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      {/* 8- add button */}
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
