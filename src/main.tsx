import React from "react";
import ReactDOM from "react-dom/client";
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import Unchi from "./Unchi";
import Waiting from "./waiting"
import Matching from "./Matching"
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
  else if(dist == "Matching"){
    return ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Matching />)
  }
}

export default ChangePage;





