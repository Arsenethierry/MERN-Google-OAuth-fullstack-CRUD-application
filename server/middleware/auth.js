import jwt from 'jsonwebtoken';

const auth = async(req,res,next)=>{
    try {
        //if user is really who is supposed to be, using jsonwebtoken
        const token = req.headers.authorization.split(" ")[1];

        const isCustomAuth = token.length< 500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token, 'arsene');

            req.userId = decodedData?.id;
        }else{
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }
        next();
        
    } catch (error) {
        console.log(error)
    }
}

export default auth;