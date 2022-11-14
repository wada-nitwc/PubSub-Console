pub mod cli{
    use std::net::{TcpStream};
    use std::io::{BufReader,BufRead,Write};
    pub fn send_message(msg: &str)->Result<(), ()>{
        let mut sock = TcpStream::connect("127.0.0.1:5555").expect("failed to connect server");
        sock.set_nonblocking(false).expect("out of service");
        println!("connect server");
        let msg = msg.as_bytes();

        match sock.write_all(msg){
            Ok(()) =>{
                return Ok(())
            },
            Err(v) =>{
                return Err(())
            }
        }


    }
}