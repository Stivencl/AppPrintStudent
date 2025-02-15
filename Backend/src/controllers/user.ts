
import { Request, Response  } from "express"
import bcrypt from "bcrypt"
import { User } from "../models/user"
import { Op } from '@sequelize/core';


export const register = async (req: Request, res: Response) =>{
    const { id_teacher, name, last_name, email, password, role, state } = req.body
    const passwordHash = await bcrypt.hash(password, 10)


      const userOne = await User.findOne({ where: {[Op.or]:{email: email, id_teacher: id_teacher}}})
      
       if (userOne){
        return res.status(400).json({
            msg: `User with email ${email} or id ${id_teacher} already exists`
        })

       }
    
    try {
        User.create({
            id_teacher: id_teacher,
            name: name,
            last_name: last_name,
            email: email,
            password: passwordHash,
            role: role,
            state: 1
        })
            res.status(200).json({
                msg: `User  ${name} ${last_name} create successful`
                
            })
    } catch (error) {
        res.status(400).json({
            msg: `Error creating user with email ${email} or id ${id_teacher}`
        })
        
    }
   
   

}

export const login = async (req: Request, res: Response) =>{
   console.log(req.body);
    res.json({
        msg: `Sesion start successful =>`,
        body:req.body 
    }) 
}