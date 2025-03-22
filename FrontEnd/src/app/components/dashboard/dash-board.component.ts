import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RequestudianteComponent } from "../requestudiante/requestudiante.component";

@Component({
  selector: 'app-dash-board',
  imports: [NavbarComponent, RequestudianteComponent],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent {

}
