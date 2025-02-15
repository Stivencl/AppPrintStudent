
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

       }, process.env.SECRETE_KEY || '61e7584460a65c30ed4ed318e5a8f2978108c1be6df235572c7d13a0f06837d9e2b2678ff3485bea3e259af18e9e398facabcfbc6ac73447f7efc8799d00c7b77fb368f5df5979c44578d84021bd8961da2548536e48581d83cf3c68fe1c2c9bafc4708812685a8741536729329c740e48e5673278ec3eada74bafe312e848b96aca65d32df310b2f9cc06fac200575a31415ff5ccf952504fc38bb465a976c0d73866890cb61a9619c0e4034b31c92c2e1549c511b7792b5c42481bcbecc59f0ace42248031b9100ce42e75eb21c8368b4eb2d675b54b64065ddc66613b99c816cf428b72ef198debe2e0e0a08840741d3c1788e3edcab90a26ab1f7440d5fb'
       );
       res.json({token})

 



}