import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json(
            { 
                message: 'Access denied. No token provided.' 
            }
        );
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;//Attach the decoded user to the request object.
        next();
    } catch (error) {
        return res.status(401).json(
            { 
                message: 'Invalid token.' 
            }
        );
    }
}