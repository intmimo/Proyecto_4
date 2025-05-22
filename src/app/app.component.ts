import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_4';

  constructor(){
    console.log("Nuevas funciones");
    console.warn("Cuidado");
    console.log("Prueba de conflictos")
  }
}
