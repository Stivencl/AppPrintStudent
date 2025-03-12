import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-sing-in',
  imports: [RouterLink, FormsModule],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.scss'
})


export class SingInComponent implements OnInit {
   
  ngOnInit(): void {
    
  }

  id: number = 0;
  name: string = '';
  last_name: string = '';
  email: string = '';
  password: string = '';
  Rpassword: string = '';
  role: string = '';
  
  constructor(private toastr: ToastrService) { 
      
  }

  addUser(){
    if (this.id == 0 || this.name == '' || this.last_name == '' || this.email == '' || this.password == '' || this.Rpassword == '' || this.role == '' ){
       this.toastr.warning("Todos los campos son obligatorios", "warning");
       return
    }

    if (this.password != this.Rpassword){
      this.toastr.error("Las contraseñas no coinsiden", "Error");
      return

    }
  }


}
