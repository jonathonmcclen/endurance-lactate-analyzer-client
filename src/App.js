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
import Registration from "./views/Registration";

function App() {

  fetch('http://localhost:3001/api/v1/readings')
  .then(res => res.json())
  .then(data => console.log(data))
  return (
    <>
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/registration" component={Registration}/>
      </Router>
      <Footer />
    </>
  );
}

export default App;
