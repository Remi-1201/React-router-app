// 5- Use react-router-dom > 5.1.0
// 6- Add useLocation
import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // {id} is imported from src/router/
  const { id } = useParams();
  // 6- Add {search}
  const { search } = useLocation();
  const querry = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameter's PAGE</h1>
      <p>Parameter is {id}</p>
      {/* 6- "name" is imported from [<Link to="page2/100?name=hogehoge">] in Page2.jsx */}
      <p>Querry parameter is {querry.get("name")}</p>
    </div>
  );
};
