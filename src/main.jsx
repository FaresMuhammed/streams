import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "../public/icomoon/style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import WindowContext from "./Dashboard/Bars/Windowcontext.jsx";
import Menucontext from "./Dashboard/Bars/Menucontexxt.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Menucontext>
      <WindowContext>
        <App />
      </WindowContext>
    </Menucontext>
  </Router>
);
