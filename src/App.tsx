import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";

// lazy loading
const HomePage = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route component={HomePage} exact path="/home" />
        <Route component={Login} exact path="/" />
      </Suspense>
    </Router>
  );
}

export default App;
