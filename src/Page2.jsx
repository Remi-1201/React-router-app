import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>PAGE 2</h1>
      {/* [100]=id */}
      <Link to="page2/100">URL Parameter</Link>
      <br />
      <Link to="page2/100?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
