module.exports = (req,res,next) => {
    if(req.session.userLogin && req.session.userLogin.rol === "usuario"){
        next()
    }else{
        res.redirect('/')
    }
}
