import { Request, Response  } from "express"
import { Student } from "../models/student"

export const registerStudent = async (req: Request, res: Response) =>{
    const { id, name, last_name, id_guardian, eps, rh, 
        birthdate, inf_acad, inf_medical, inf_vuln,
         code_dane, piar} = req.body


    Student.create({
        id: id,
        name: name,
        last_name: last_name,
        id_guardian: id_guardian,
        eps: eps,
        rh: rh,
        birthdate: birthdate,
        inf_acad: inf_acad,
        inf_medical: inf_medical,
        inf_vuln: inf_vuln,
        code_dane: code_dane,
        piar: false,
       
        
    }).then((student) => {
        res.status(200).json({
            msg: "Estudiante creado correctamente",
            student
        })
    }).catch((err) => {
        res.status(400).json({
            msg: "Error al crear el estudiante",
            err
        })
    })
}

export const getStudents = async (req : Request, res: Response)=>{
    const listaStudents = await Student.findAll();
    res.json({listaStudents});


}