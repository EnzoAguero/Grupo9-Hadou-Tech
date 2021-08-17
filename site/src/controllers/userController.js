module.exports = {
    register : (req,res) => {
        return res.render('register',{
            title : "Hadou Tech",
           
        })
    },
    login : (req,res) => {
        return res.render('login',{
            title : "Hadou Tech",
            
        })
    }
}
   