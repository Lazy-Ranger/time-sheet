const {JwtService} = require('../jwt')


function authorizedToken(req,res,next){
    try{
        const authHeader = req.headers["authorization"];
        console.log(authHeader);
    
        if(!authHeader){    
            throw res.status(401).send('Unauthorized')
        }

        const [,token] = authHeader.split(" ");

        if(!token){
            throw res.status(401).send("Unauthorized")
        }

        const user = JwtService.verify(token);

        req.user = user
        next()

    }catch(err){
        res.status(401).send('Unauthorized')
    }
}

module.exports = {authorizedToken}