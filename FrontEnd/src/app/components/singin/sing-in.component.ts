import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-sing-in',
  imports: [RouterLink, FormsModule],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.scss'
})


export class SingInComponent implements OnInit {
   
  ngOnInit(): void {}

  id_teacher: number = 0;
  name: string = '';
  last_name: string = '';
  email: string = '';
  password: string = '';
  Rpassword: string = '';
  role: string = '';
  
  constructor(private toastr: ToastrService,
    private userService: UserService,
    private router: Router
              
  ) { }

  addUser(){
    if (this.id_teacher == 0 || this.name == '' || this.last_name == '' || this.email == '' || this.password == '' || this.Rpassword == '' || this.role == '' ){
       this.toastr.warning("Todos los campos son obligatorios", "warning");
       return
    }

    if (this.password != this.Rpassword){
      this.toastr.error("Las contraseñas no coinciden", "Error");
      return

    }

    //Create the object
    const user: User = {
      
      id_teacher: this.id_teacher,
      name: this.name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      role: this.role,
      
     
    }
    console.log(user);
    this.userService.signIn(user).subscribe(data =>{
      this.toastr.success("Usuario creado con exito", "Exito");

    })
  }


}
