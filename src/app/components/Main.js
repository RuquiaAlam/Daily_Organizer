import React from "react";
import { Provider } from "react-redux";
import { store } from "../store"
import {ConnectedDashboard }from "./Dashboard"
const Main = () => {
  return (
    <div>
      <Provider store={store}>
        <ConnectedDashboard/>
      </Provider>
    </div>
  );
};
export default Main;
