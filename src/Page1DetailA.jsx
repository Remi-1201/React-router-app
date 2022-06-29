// 7- add {useLocation}
// 8 - add useHistory
import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  // 7- add {state}
  const { state } = useLocation();

  const history = useHistory();
  // 8- goBack() = useHistory's method
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>PAGE 1 DETAIL A</h1>
      {/* 8- add button to goback to PAGE 1 */}
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};
