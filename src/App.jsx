import React, { useContext, useEffect } from "react";
import Routing from "./router";
import { DataContext } from "./components/DataProvider/DataProvider";
import { Type } from "./utility/action";
import { auth } from "./utility/firebase";
function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return <Routing />;
}

export default App;
