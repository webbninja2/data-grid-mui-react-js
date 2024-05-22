import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import MainLayout from "./components/layout/layout";
import Page404 from "./pages/404/404";
import { ToastContainer } from "react-toastify";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ServerSideDataGrid from "./pages/data-grid/server";
import ClientSideDataGrid from "./pages/data-grid/client";

function App() {
  console.log("process.env.REACT_APP_TITLE", process.env.REACT_APP_TITLE)
  return (
    <BrowserRouter>
      <ToastContainer />
      <Provider store={store}>
        <Routes>
          {/* Login Route without MainLayout */}
          <Route path="/" element={<Login />} />
          <Route
            path="/*"
            element={
              <MainLayout>
                <Routes>
                  <Route path="/data-grid-server" element={<ServerSideDataGrid />} />
                  <Route path="/data-grid-client" element={<ClientSideDataGrid />} />
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </MainLayout>
            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
