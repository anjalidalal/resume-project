import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import "./style.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="heading">
        <h1>Create your Social Card</h1>
        <p>Please fill the form below to create a Social Card for you</p>
      </div>
      <Card />
    </div>
  );
};

export default App;
