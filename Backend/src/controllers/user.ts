
import { Request, Response  } from "express"
import bcrypt from "bcrypt"
import { User } from "../models/user"
import { Op } from '@sequelize/core';
import jwt from 'jsonwebtoken'

export const register = async (req: Request, res: Response): Promise<any> => {

    const { id_teacher, name, last_name, email, password, role, state } = req.body
   
     const userUnique = await User.findOne({ where: {[Op.or]:{email: email, id_teacher: id_teacher}}})
      
       if (userUnique){
        return res.status(400).json({
            msg: `User with email ${email} or id ${id_teacher} already exists`
        })

       }
       const passwordHash = await bcrypt.hash(password, 10)
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

export const login = async (req: Request, res: Response): Promise<any> =>{
    const {email, password} = req.body
    const user: any = await User.findOne({ where: {email: email}})

    if (!user){
        return res.status(400).json({
            msg: `User with email ${email} not exists`
        })

       }

       const validPassword = await bcrypt.compare(password, user.password)
       if (!validPassword){
        return res.status(400).json({
            msg: `Incorrect password`
        })

       }

       const token = jwt.sign({
        email:email

       }, process.env.SECRETE_KEY || 'PGA-Print-Student',
       {
        expiresIn: '200000'
        }
       );
       res.json({token})
}

