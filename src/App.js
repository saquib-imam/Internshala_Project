import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Checkout from "./components/checkout/checkout";
import Categories from "./components/categories/categories";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { UseStateValue } from "./context-api/StateProvider";
import Payment from "./components/Payment/payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/orders";
import Doctor from "./components/doctors/doctors";

const promise = loadStripe(
  "pk_test_51IqxlASEhzQNvF8WlbsmRCuO1hFEygz560i0yke9A2ePe5CCkOu1uERto0zOKUCH4Z46cmzRdlWrhNhyO0gBUHli00Lz1saPkL"
);

function App() {
  const [{}, dispatch] = UseStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/medicine">
            <Header />
            <Home />
          </Route>
          <Route path="/hospitals">
            <Header />
            <Doctor />
          </Route>
          <Route path="/">
            <Header />
            <Categories />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
