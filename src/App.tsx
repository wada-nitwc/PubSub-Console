//import { useState } from 'react';
import React from "react";
import ReactPlayer from 'react-player';
import {useState,useEffect} from "react";
import {desktopDir,join} from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { invoke } from "@tauri-apps/api";
import { Link, Outlet } from 'react-router-dom';
import ChangePage from "./main";

const App = () => {
  const [url,setUrl] = useState<string>("");
  const [src,setSrc] = useState<string>("");
  const [SubscribeValue,SetSubscribeValue] = useState<string>("");
  const [PublishValue,SetPublishValue] = useState<string>("");
  const [player,setPlayer] = useState<JSX.Element>();
  const [res,setRes] = useState<string>("");

  useEffect(()=>{
    (async () =>{
      

    })();
  },[]);


  async function Publish(){
    ChangePage("Waiting");
    await invoke("test",{role: "server",msg: PublishValue});
   
    ChangePage("Matching");
    
  

  }
  async function Subscribe(){
    ChangePage("Waiting");
    await invoke("test",{role: "client",msg: SubscribeValue})
    ChangePage("Matching");

  }
  
  return (
    <>
      <h1>PubSub Console</h1>
      <br />
      <div>
      <h2>Publish</h2>
      <input type="text" value={PublishValue} onChange={e => SetPublishValue(e.target.value)}/>
      <button onClick={Publish} >送信</button>
      </div>
      
      <br/>
      <h2>Subscribe</h2>
      <input type="text" value={SubscribeValue} onChange={ e => SetSubscribeValue(e.target.value)}/>
      <button onClick={Subscribe}>送信</button>
      <br />
      <p onClick={e => ChangePage("Unchi")}>aaaa</p>
     
     
    </>
  );
}

export default App;