import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-requestudiante',
  imports: [CommonModule, FormsModule ],
  templateUrl: './requestudiante.component.html',
  styleUrl: './requestudiante.component.scss'
})
export class RequestudianteComponent {

  grades = ['Sexto', 'Séptimo', 'Octavo', 'Noveno', 'Décimo', 'Once'];
  groups = ['1', '2', '3', '4'];
  
  selectedGrade: string = '';
  selectedGroup: string = '';

  applyFilter() {
    console.log(`Filtrando por: Grado ${this.selectedGrade}, Grupo ${this.selectedGroup}`);
  }

}
