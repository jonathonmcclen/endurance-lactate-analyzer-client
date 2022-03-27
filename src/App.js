import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// css and styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//views
import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/profile";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile/:user_id" component={Profile} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
