// 7- add {useLocation}
import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  // 7- add {state}
  const { state } = useLocation();
  return (
    <div>
      <h1>PAGE 1 DETAIL A</h1>
    </div>
  );
};
