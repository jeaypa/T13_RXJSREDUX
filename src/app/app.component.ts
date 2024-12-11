import { Component } from '@angular/core';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { TareaFormularioComponent } from './tarea-formulario/tarea-formulario.component';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BarraSuperiorComponent, TareaFormularioComponent, TareaListaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
