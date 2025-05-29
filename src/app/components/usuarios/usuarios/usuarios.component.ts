import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuariosComponent { }
// Array de usuarios
const usuarios: string[] = [
  "Juan Pérez",
  "María García",
  "Luis Rodríguez",
  "Carmen López"
];

// Función para renderizar la lista
function renderizarUsuarios(): void {
  const lista = document.querySelector(".lista-usuarios");

  if (!lista) return;

  usuarios.forEach(nombre => {
    const li = document.createElement("li");
    li.className = "usuario";
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

// Esperar que el DOM esté cargado
document.addEventListener("DOMContentLoaded", renderizarUsuarios);
