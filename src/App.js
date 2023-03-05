import "./App.css";
import { Login, Signup } from "./modules/learner/pages";

function App() {
  return (
    <div className="App flex flex-1 justify-center">
      <Signup />
      {/* <Login /> */}
    </div>
  );
}

export default App;
