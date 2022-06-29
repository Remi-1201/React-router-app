// 5- Use react-router-dom > 5.1.0
import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  // {id} is imported from src/router/
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameter's PAGE</h1>
      <p>Parameter is {id}</p>
    </div>
  );
};
