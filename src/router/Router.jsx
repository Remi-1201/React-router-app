import { Switch, Route } from "react-router-dom";
// 4- import from "../ect."
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page404 } from "../page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    // 4- Copied from App.js
    <Switch>
      {/* 2- All Route will redirect to <Home /> if there isn't "exact" */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* 3- Add render{(...)=>()} & nest <Switch> + <Page1 /> + ect.... inside */}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {/* 4- Delete all & replace with page1Routes.map ... */}
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      {/* 5- Add detail of PAGE 2 */}
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      {/* 9- add Page404 */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
