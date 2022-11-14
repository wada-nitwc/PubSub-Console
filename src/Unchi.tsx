import {useState,useEffect} from "react";
import {desktopDir,join} from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { invoke } from "@tauri-apps/api";

const Unchi = () => {
    const [url,setUrl] = useState<string>("");
    const [src,setSrc] = useState<string>("");
    const [value,setValue] = useState<string>("");
    const [player,setPlayer] = useState<JSX.Element>();
    const [res,setRes] = useState<string>("");
  
    useEffect(()=>{
      (async () =>{
        
  
      })();
    },[]);
  
  
    async function Publish(){
      await invoke("test",{role: "client",msg: value});
    
  
    }
    
    return (
      <>
        <h1>unchi</h1>
       
      </>
    );
  }
  
  export default Unchi;
