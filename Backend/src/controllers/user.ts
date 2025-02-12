
import { Request, Response  } from "express"
import bcrypt from "bcrypt"
import { User } from "../models/user"
export const registrer = async (req: Request, res: Response) =>{
    const { name, last_name, email, password, role, state } = req.body

    const passwordHash = await bcrypt.hash(password, 10)

    User.create({
        name: name,
        last_name: last_name,
        email: email,
        password: passwordHash,
        role: role,
        state: 1
    }).then((user) => {
        res.status(200).json({
            msg: "Usuario creado correctamente",
            user
        })
    }).catch((err) => {
        res.status(400).json({
            msg: "Error al crear el usuario",
            err
        })
    })



}