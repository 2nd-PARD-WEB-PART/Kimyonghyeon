import { Route, Routes} from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";

import Top from "./pages/Top";
import Edit from "./pages/Edit";
import Body from "./pages/Body";

function App() {
  return (
      // <>
      //     <div style={{ background: "var(--Dark-white, #FAFAFA)" }}>
      //         <Top></Top>
      //         <Body></Body>
      //     </div>
      // </>

      <div>
          <Routes>
              <Route path="/" element={<Top />}>
                  <Route path="/home" element={<Home />} />
                  <Route index element={<Body />} />
                  <Route path="/edit" element={<Edit />} />
              </Route>
          </Routes>
      </div>
  );
}

export default App;
