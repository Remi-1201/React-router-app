import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>We could'n find this page.</h1>
      <Link to="/">Back to HOMEPAGE</Link>
    </div>
  );
};
