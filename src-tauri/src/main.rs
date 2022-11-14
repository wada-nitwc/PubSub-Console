


#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod server;
mod handle_literal;
mod client;
pub use crate::client::cli;                                                                                     
pub use crate::handle_literal::literal;
pub use crate::server::waiting;
use std::env;
use std::process;
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn test(role: &str,msg: &str){
    println!("{msg}");
    if role == "server"{
        let recv = waiting::test().unwrap();
        println!("{}",recv);
        let literals = literal::split_literal(recv);
        println!("{:?}",literals);

    }
    else if role == "client"{
        match cli::send_message(msg){
            Ok(()) =>{
                println!("success!");
            },
            Err(e) =>{
                println!("miss!");
            }
        }

    }
    else{
        println!("あほ");
        process::exit(0);
    }

    

}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![test])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
