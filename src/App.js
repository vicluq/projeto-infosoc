import { useState, useCallback } from "react";
import Header from "./Components/Header";
import Form from "./Screens/FormScreen";
import Showcase from "./Screens/DisplayScreen";
import ThankYou from "./Components/ThankYouView";
import Loading from "./Components/Loading";
import ScreensType from "./data/screens";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(ScreensType.FORM);
  const [loading, setLoading] = useState(false);

  const changeScreen = useCallback((screen) => {
    setLoading(true);
    setTimeout(() => {
      setScreen(screen);
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="App">
      {loading && <Loading />}
      <Header screen={screen} changeScreen={changeScreen} />
      <div className="App-Content">
        {screen === ScreensType.FORM && (
          <Form changeScreen={changeScreen} setLoading={setLoading} />
        )}
        {screen === ScreensType.SHOWCASE && (
          <Showcase setLoading={setLoading} />
        )}
        {screen === ScreensType.THANK_YOU_SCREEN && <ThankYou />}
      </div>
    </div>
  );
}

export default App;
