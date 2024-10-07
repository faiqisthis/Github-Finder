import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/GithubContext";
import { AlertProvider } from "./context/AlertContext";
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="flex flex-col justify-between h-screen ">
                  <Navbar title={"Github Finder"} />
                  <Home />
                  <Footer />
                </div>
              }
            />
            <Route
              exact
              path="/about"
              element={
                <div className="flex flex-col">
                  <Navbar title={"Github Finder"} />
                  <About />
                </div>
              }
            />
              <Route
              exact
              path="/user/:loginURL"
              element={
                <div className="flex flex-col justify-between h-screen ">
                  <Navbar title={"Github Finder"} />
                  <User/>
                  <Footer />
                </div>
              }
            />
            <Route exact path="/notfound" element={<NotFound />} />
            <Route exact path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
