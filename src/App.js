import { BrowserRouter, Link } from "react-router-dom";
// 4- import { Router }, delete unnecessary things
import { Router } from "./router/Router";
import "./styles.css";

// 2- <BrowserRouter> will active React router
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      {/* 4 - Move <Switch> to Router.jsx */}
      {/* 4 - Add <Router /> */}
      <Router />
    </BrowserRouter>
  );
}
