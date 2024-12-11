import { Component, OnInit } from '@angular/core';
import { TareaService } from '../servicios/tarea.service';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css'],
})
export class BarraSuperiorComponent implements OnInit {
  tareasPendientes: number = 0;

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tareaService.obtenerTareasPendientes().subscribe(
      pendientes => (this.tareasPendientes = pendientes)
    );
  }
}
