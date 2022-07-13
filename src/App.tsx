import React, { Suspense } from "react";
import "./Styles/style.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ErrorBoundary from "./ErrorBoundaries";

const ApplyTheme = React.lazy(() => import("./components/applyTheme"));
const Main = React.lazy(() => import("./components/main"));

export interface AppProps {
  imgSrc: string;
}

const App: React.FC<AppProps> = ({ imgSrc }) => {
  return (
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <ErrorBoundary>
        <ApplyTheme>
          <ToastContainer toastClassName="toast" />
          <Main imgSrc={imgSrc} />
        </ApplyTheme>
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;
