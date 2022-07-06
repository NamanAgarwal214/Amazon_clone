// import './App.css';
import react, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JkjtvSDrI4DVIWq7NEdFb38cpUwIQWbfEvdZaMEgVjcS2wy5J4uosm0lEmpAqHp8wqW6SX6261fcj3a65toyZos00TXcrxcVW"
);

function App() {
  useStripe();
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log(authUser);
      if (authUser) {
        // user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
