import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductosComponent { 
   productos = [
    {
      nombre: 'Laptop HP',
      descripcion: 'Laptop potente con procesador Intel i7 y 16GB de RAM.',
      precio: 1200,
      imagen: 'https://via.placeholder.com/400x250?text=Laptop+HP'
    },
    {
      nombre: 'Smartphone Samsung',
      descripcion: 'Pantalla AMOLED, 128GB de almacenamiento y cámara triple.',
      precio: 850,
      imagen: 'https://via.placeholder.com/400x250?text=Samsung+Galaxy'
    },
    {
      nombre: 'Auriculares Bluetooth',
      descripcion: 'Cancelación de ruido, batería de larga duración.',
      precio: 150,
      imagen: 'https://via.placeholder.com/400x250?text=Auriculares+Bluetooth'
    }
  ];
}
