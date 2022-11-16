import React from "react";
import ReactDOM from "react-dom/client";
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import Unchi from "./Unchi";
import Waiting from "./Waiting"
import "./style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render( 
    <App />
);


function ChangePage(dist: any){
  if(dist == "App"){
    return ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
  }
  else if(dist == "Unchi"){
    return ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Unchi />);
  } 
  else if(dist == "Waiting"){
    return ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Waiting />);
  }
}

export default ChangePage;





