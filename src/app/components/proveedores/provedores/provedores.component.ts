import { Component } from '@angular/core';

@Component({
  selector: 'app-provedores',
  standalone: true,
  imports: [],
  templateUrl: './provedores.component.html',
  styleUrl: './provedores.component.css'
})
export class ProvedoresComponent {
// Datos de proveedores directamente en el componente
  proveedores: any[] = [
    {
      id: 1,
      nombre: 'Distribuidora Alimentos S.A.',
      contacto: 'Juan Pérez',
      telefono: '555-123-4567',
      email: 'juan@alimentos.com',
      direccion: 'Calle Principal 123, Ciudad',
      productos: ['Lácteos', 'Carnes', 'Verduras'],
      activo: true
    },
    {
      id: 2,
      nombre: 'Electrodomésticos Modernos',
      contacto: 'María Gómez',
      telefono: '555-987-6543',
      email: 'maria@electro.com',
      direccion: 'Avenida Central 456, Ciudad',
      productos: ['Refrigeradores', 'Lavadoras', 'Microondas'],
      activo: true
    },
    {
      id: 3,
      nombre: 'Papelería Creativa',
      contacto: 'Carlos Ruiz',
      telefono: '555-456-7890',
      email: 'carlos@papeleria.com',
      direccion: 'Boulevard Norte 789, Ciudad',
      productos: ['Cuadernos', 'Lápices', 'Tintas'],
      activo: false
    }
  ];

  filteredProveedores: any[] = [];
  searchTerm: string = '';
  showInactive: boolean = false;

  constructor() {
    // Inicializa la lista filtrada
    this.filterProveedores();
  }

  filterProveedores(): void {
    this.filteredProveedores = this.proveedores.filter(proveedor => {
      // Filtrado por término de búsqueda
      const matchesSearch = 
        proveedor.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        proveedor.contacto.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        proveedor.productos.some((p: string) => p.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      // Filtrado por estado activo/inactivo
      const matchesActive = this.showInactive ? true : proveedor.activo;
      
      return matchesSearch && matchesActive;
    });
  }

  toggleInactive(): void {
    this.showInactive = !this.showInactive;
    this.filterProveedores();
  }

  // Función para cambiar el estado activo/inactivo
  toggleStatus(proveedor: any): void {
    proveedor.activo = !proveedor.activo;
    this.filterProveedores();
  }
}
