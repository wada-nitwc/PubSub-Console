//import { useState } from 'react';
import React from "react";
import ReactPlayer from 'react-player';
import {useState,useEffect} from "react";
import {desktopDir,join} from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { invoke } from "@tauri-apps/api";
import { Link } from "react-router-dom";

const App = () => {
  const [url,setUrl] = useState<string>("");
  const [src,setSrc] = useState<string>("");
  const [value,setValue] = useState<string>("");
  const [player,setPlayer] = useState<JSX.Element>();
  const [res,setRes] = useState<string>("");

  useEffect(()=>{
    (async () =>{
      

    })();
  },[]);



  useEffect(()=>{
    const fn = async () =>{
      const desktopDirPath = await desktopDir();
      const new_url = convertFileSrc(await join(desktopDirPath,src));
      setUrl(new_url);
      const player = <ReactPlayer url = {new_url} controls={true}/>;
      setPlayer(player);

    };
    fn();
  },[src]);

  async function Publish(){
    await invoke("test",{role: "client",msg: value});
  

  }
  
  return (
    <>
      <h1>PubSub Console</h1>
      <br />
      <div>
      <h2>Publish</h2>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
      <button onClick={Publish} >送信</button>
      </div>
      
      <br/>
      <h2>Subscribe</h2>
      <input type="text" />
      <button>送信</button>
      <br />
     
     
    </>
  );
}

export default App;