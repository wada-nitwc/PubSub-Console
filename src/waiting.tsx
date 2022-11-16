import {useState,useEffect} from "react";
import {desktopDir,join} from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { invoke } from "@tauri-apps/api";
import ChangePage from "./main";

const waiting = () => {
    const [url,setUrl] = useState<string>("");
    const [src,setSrc] = useState<string>("");
    const [value,setValue] = useState<string>("");
    const [player,setPlayer] = useState<JSX.Element>();
    const [res,setRes] = useState<string>("");
  
    useEffect(()=>{
      (async () =>{
        
  
      })();
    },[]);
  
  

    
    return (
      <>
        <h1>loading....</h1>
      </>
    );
  }
  
  export default waiting;
