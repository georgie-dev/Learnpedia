import "./App.css";
import { Navbar} from "./components";
import Learner from "./modules/learner/App";
import { Home } from "./modules/learner/pages";
import { Signup } from "./modules/learner/components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Signup" element={<Signup/>}/>
        </Route>
        <Route path="/learner" element={<Learner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
