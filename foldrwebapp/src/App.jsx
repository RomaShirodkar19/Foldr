import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Upload from "./pages/Upload";
import Transactions from "./pages/Transactions";
import Subscription from "./pages/Subscription";
import Dashboard from "./pages/Dashboard";
import MyFiles from "./pages/MyFiles";
import { Show , RedirectToSignIn } from "@clerk/react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Show when="signed-in">
                <Dashboard />
              </Show>

              <Show when="signed-out">
                <RedirectToSignIn />
              </Show>
            </>
          }
        />
        <Route
          path="/upload"
          element={
            <>
              <Show when="signed-in">
                <Upload />
              </Show>

              <Show when="signed-out">
                <RedirectToSignIn />
              </Show>
            </>
          }
        />
        <Route
          path="/my-files"
          element={
            <>
              <Show when="signed-in">
                <MyFiles />
              </Show>

              <Show when="signed-out">
                <RedirectToSignIn />
              </Show>
            </>
          }
        />
        <Route
          path="/transactions"
          element={
            <>
              <Show when="signed-in">
                <Transactions />
              </Show>

              <Show when="signed-out">
                <RedirectToSignIn />
              </Show>
            </>
          }
        />
        <Route
          path="/subscription"
          element={
            <>
              <Show when="signed-in">
                <Subscription />
              </Show>

              <Show when="signed-out">
                <RedirectToSignIn />
              </Show>
            </>
          }
        />

        <Route path="/*" element={ <RedirectToSignIn/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
