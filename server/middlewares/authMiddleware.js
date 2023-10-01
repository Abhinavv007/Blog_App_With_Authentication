import jwt from "jsonwebtoken"
const secretKey = 'secret';

function verifyToken(req, res, next) {
  
  const authHeader = req.headers['authorization'];

  if (authHeader && authHeader.startsWith('Bearer ')) {
   
    const token = authHeader.slice(7);
       jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.user = decoded;
      next();
    });
  } else {
    
    return res.status(401).json({ message: 'Authentication required' });
  }
}
export default verifyToken
