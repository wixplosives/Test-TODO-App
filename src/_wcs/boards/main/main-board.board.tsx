import React from "react";
import { createBoard } from "@wixc3/react-board";
import Main from "../../../components/main";
import { Provider } from "react-redux";
import { createStore, Action } from "redux";
import ApplyTheme from "../../../components/applyTheme";
import store from "../../../Redux/store";
import img from "../../../Assets/img/background.jpg";

export default createBoard({
  name: "Main Board",
  Board: () => (
    <Provider store={store}>
      {" "}
      <ApplyTheme>
        {" "}
        <Main imgSrc={img} />
      </ApplyTheme>{" "}
    </Provider>
  ),
  environmentProps: {
    windowWidth: 1024,
    windowHeight: 886,
  },
});
