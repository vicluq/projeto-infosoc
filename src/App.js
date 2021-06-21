import { useState, useEffect, useCallback } from "react";
import Header from "./Components/Header";
import Form from "./Screens/FormScreen";
import Showcase from "./Screens/DisplayScreen";
import Loading from './Components/Loading'
import ScreensType from "./data/screens";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(ScreensType.FORM);
  const [loading, setLoading] = useState(false);

  const changeScreen = (screen) => {
    setLoading(true);
    setTimeout(() => {
      // Kill loading screen
      setScreen(screen);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="App">
      {loading && <Loading />}
      <Header screen={screen} changeScreen={changeScreen} />
      <div className="App-Content">
        {screen === ScreensType.FORM && <Form changeScreen={changeScreen} setLoading={setLoading} />}
        {screen === ScreensType.SHOWCASE && <Showcase setLoading={setLoading} />}
      </div>
    </div>
  );
}

export default App;
