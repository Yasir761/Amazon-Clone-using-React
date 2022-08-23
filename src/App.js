import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from './firebase'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import Orders from "./components/Orders";

const promise = loadStripe(
  'pk_test_51LWdgZSEufOxOeCpKcN77Ev2NlCR2HPwZ19kCs6BXd1C1uggaey8vVMcvQppnssflptRPwLvRCoozeDcwwwY6SFC00wwicOPKe'
  );

const App = () => {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
auth.onAuthStateChanged(authUser=>{


    if(authUser){
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }else{
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
})
  },[])
  return (
    //BEM//
    <Router>
      {/* <Header /> */}
      <div className="app">
        <Routes>
          <>
          <Route path="/orders" element={(
            <>

          <Header key={1}/>
          <Orders key={2} />
            </>

          )}></Route>
            
            <Route path="/login" element={<Login />}></Route>
           
            <Route path="/checkout" element={(
              <>
            <Header key={1}/>
            <Checkout key={3} />
              </>
            )}></Route>
            
            <Route path="/payment" element={(
              <>
            <Header key={1}/>
            <Elements stripe={promise}>
            <Payment key={4}/>
            </Elements>
              </>
            )}></Route>





            <Route path="/" element={(
              <>
            <Header key={1}/>
            <Home key={5}/>
              </>
            )} ></Route>
          </>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
