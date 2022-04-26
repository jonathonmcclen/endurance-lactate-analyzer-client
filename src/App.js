import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {useEffect, useState} from 'react'

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
  const [user, setUser] = useState(null)

useEffect(()=>{
  fetch("/api/v1/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    } else{
      r.json().then((data) => setUser('guest'))
    }
  });
}, [])
  
  function handleSetUser(user){
    setUser(user)
  }
  return (
    <>
      <Header user={user} setUser={setUser}/>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login"><Login setUser={setUser}/></Route>
        <Route path="/profile"><Profile user={user}/></Route> 
        <Route path="/registration" component={Registration}/>
      </Router>
      <Footer />
    </>
  );
}

export default App;
