import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import About from "./pages/About/About";
import Consult from "./pages/Consult/Consult";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home/Home";
import ServiceDetails from "./pages/Home/Services/ServiceDetails/ServiceDetails";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NoFound/NotFound";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <PrivateRoute path="/consult">
              <Consult></Consult>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
