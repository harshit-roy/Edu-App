import "./App.css";
import Loginpage from "./Pages/LoginPage";
import { Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Loginpage} exact />
      <Route path="/home" component={Homepage} />
    </div>
  );
}

export default App;
