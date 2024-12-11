import { Component, OnInit } from '@angular/core';
import { Tarea, TareaService } from '../servicios/tarea.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarea-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.css'],
})
export class TareaListaComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tareaService.obtenerTareas().subscribe(
      tareas => (this.tareas = tareas)
    );
  }

  cambiarEstado(id: number): void {
    this.tareaService.cambiarEstado(id);
  }
}
