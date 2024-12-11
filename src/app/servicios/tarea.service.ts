import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Tarea {
  id: number;
  descripcion: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: Tarea[] = [];
  private tareasSubject: BehaviorSubject<Tarea[]> = new BehaviorSubject(this.tareas);

  private tareasPendientesSubject: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {}

  obtenerTareas(): Observable<Tarea[]> {
    return this.tareasSubject.asObservable();
  }

  agregarTarea(descripcion: string): void {
    const nuevaTarea: Tarea = {
      id: Date.now(),
      descripcion,
      completada: false,
    };
    this.tareas.push(nuevaTarea);
    this.actualizarTareas();
  }

  cambiarEstado(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      this.actualizarTareas();
    }
  }

  obtenerTareasPendientes(): Observable<number> {
    return this.tareasPendientesSubject.asObservable();
  }

  private actualizarTareas(): void {
    this.tareasSubject.next(this.tareas);
    const pendientes = this.tareas.filter(t => !t.completada).length;
    this.tareasPendientesSubject.next(pendientes);
  }
}
