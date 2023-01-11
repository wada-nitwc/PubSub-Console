//import { useState } from 'react';
import React from "react";
import ReactPlayer from 'react-player';
import {useState,useEffect} from "react";
import {desktopDir,join} from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { invoke } from "@tauri-apps/api";
import { Link, Outlet } from 'react-router-dom';
import ChangePage from "./main";

const Matching = () => {
    return (
        <h1>マッチング成功</h1>
    );
}

export default Matching;