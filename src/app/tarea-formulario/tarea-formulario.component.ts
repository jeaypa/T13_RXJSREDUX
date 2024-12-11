import { Component } from '@angular/core';
import { TareaService } from '../servicios/tarea.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarea-formulario.component.html',
  styleUrls: ['./tarea-formulario.component.css'],
})
export class TareaFormularioComponent {
  descripcion: string = '';

  constructor(private tareaService: TareaService) {}

  agregarTarea(): void {
    if (this.descripcion.trim()) {
      this.tareaService.agregarTarea(this.descripcion);
      this.descripcion = '';
    }
  }
}
