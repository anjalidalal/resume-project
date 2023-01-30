import React from "react";
import Card from "./components/Card/Card";
import CardForm from "./components/Card/CardForm";
import Header from "./components/Header/Header";
import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="heading">
        <h1>Create your Social Card</h1>
        <p>Please fill the form below to create a Social Card for you</p>
      </div>
      <div className="cardContainer">
        <CardForm />
        <Card />
      </div>
    </>
  );
};

export default App;
