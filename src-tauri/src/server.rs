
pub mod waiting{
    use std::net::TcpListener;
    use std::io::{Read,Write};
    use std::str;
    pub fn test() -> Result<String,()>{
        let addr = "127.0.0.1:5555";
        let result = TcpListener::bind(addr);
        match result{
            Ok(listener)=>{
                println!("Listening on {}",addr);
                let res = listener.accept();
                match res{
                    Ok((mut stream, _)) =>{
                        println!("PubSub server Accepted Connection from {}",stream.peer_addr().unwrap());
                        let mut buf = [0u8;1024];
                        let res = stream.read(&mut buf);
                        match res{
                            Ok(length) =>{
                                let text = str::from_utf8(&buf[..length]).unwrap();
                                println!("Received Message {} from {}",text,stream.peer_addr().unwrap());
                                return Ok(text.to_string());
    
                            },
                            Err(e) =>{
                                return Err(());
    
                            }
                        }
    
                    },
                    Err(e) =>{
                        return Err(());
    
                    }
                }
            },
            Err(e)=>{
                return Err(());
    
            }
        }
    }
}