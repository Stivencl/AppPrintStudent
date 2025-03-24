import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;



@Component({
  selector: 'app-requestudiante',
  imports: [CommonModule, FormsModule ],
  templateUrl: './requestudiante.component.html',
  styleUrl: './requestudiante.component.scss'
})
export class RequestudianteComponent implements AfterViewInit {
  
  
  docentes = [
    { nombre: 'Juan Pérez' },
    { nombre: 'Ana Gómez' },
    { nombre: 'Carlos Rodríguez' }
  ];

  tituloModal: string = '';
  contenidoModal: string = '';
  modalInstance: any;

  ngAfterViewInit(): void {
    const modalElement = document.getElementById('modalDocente');
    if (modalElement) {
      this.modalInstance = new bootstrap.Modal(modalElement);
    }
  }

  abrirModal(tipo: string, docente: any) {
    if (tipo === 'anotacion') {
      this.tituloModal = 'Anotación';
      this.contenidoModal = `Añadir anotación para ${docente.nombre}`;
    } else if (tipo === 'ver') {
      this.tituloModal = 'Ver Detalles';
      this.contenidoModal = `Detalles del docente: ${docente.nombre}`;
    }
    this.modalInstance.show();
  }

  
  


  

  grades = ['PreEscolar','Primero','Segundo','Tercero','Cuarto','Quinto','Sexto', 'Séptimo', 'Octavo', 'Noveno', 'Décimo', 'Once'];
  groups = ['1', '2', '3', '4'];
  
  selectedGrade: string = '';
  selectedGroup: string = '';

  applyFilter() {
    console.log(`Filtrando por: Grado ${this.selectedGrade}, Grupo ${this.selectedGroup}`);
  }

}
