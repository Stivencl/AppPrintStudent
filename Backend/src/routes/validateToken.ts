import { NextFunction, Request, Response  } from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization']

    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
          try {
            const token = headerToken.slice(7)
            jwt.verify(token, process.env.SECRET_KEY || 'PGA-Print-Student')
            next()
        } catch (error) {
            res.status(401).json({
                msg: `Token invalido`
            })
        }
        
    }else{
        res.status(401).json({
            msg: `Acceso denegado`
        })
    }
}

export default validateToken;