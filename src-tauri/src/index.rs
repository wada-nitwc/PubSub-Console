mod server;
mod handle_literal;
mod client;
pub use crate::client::cli;
pub use crate::handle_literal::literal;
pub use crate::server::waiting;
use std::env;
use std::process;


fn main(){
    let args:Vec<String> = env::args().collect();
    if args.len() !=2{
        println!("どっちか選べ");
        process::exit(0);
    }
    if args[1] == "server"{
        let recv = waiting::test().unwrap();
        println!("{}",recv);
        let literals = literal::split_literal(recv);
        println!("{:?}",literals);

    }
    else if args[1] == "client"{
        match cli::send_message(){
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


