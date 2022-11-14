pub mod literal{
    pub fn split_literal(literal:String)->Vec<String>{
        let hairetu = literal.split("/").fold(Vec::new(), |mut s,i|{
            s.push(i.to_string());
            s
        });
        return hairetu;


    }
}