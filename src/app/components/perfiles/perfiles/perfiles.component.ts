import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Usuario {
  nombre: string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [],
  templateUrl: './perfiles.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilesComponent {
  usuarios: Usuario[] = [
    {
      nombre: 'Laura Martínez',
      email: 'laura@example.com',
      avatar: 'https://i.pravatar.cc/100?img=5'
    },
    {
      nombre: 'Carlos Ríos',
      email: 'carlos@example.com',
      avatar: 'https://i.pravatar.cc/100?img=12'
    },
    {
      nombre: 'María López',
      email: 'maria@example.com',
      avatar: 'https://i.pravatar.cc/100?img=3'
    }
  ];
}
