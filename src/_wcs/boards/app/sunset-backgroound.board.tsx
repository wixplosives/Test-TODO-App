import React from "react";
import { createBoard } from "@wixc3/react-board";
import App from "../../../App";
import { Provider } from "react-redux";
import { createStore, Action } from "redux";
import ApplyTheme from "../../../components/applyTheme";
import store from "../../../Redux/store";
import img from "../../../Assets/img/background.jpg";

export default createBoard({
    name: "sunset backgroound",
    Board: () => (
        <Provider store={store}>
            {" "}
            <ApplyTheme>
                <App imgSrc="https://wallpaperaccess.com/full/6069299.jpg" />
            </ApplyTheme>{" "}
        </Provider>
    ),
    environmentProps: {
        windowWidth: 986,
        windowHeight: 846,
    },
});