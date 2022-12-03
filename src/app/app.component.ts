import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'jesneth';
  saldo: number = 1000;
  fechaActual = new Date();
  articulos = [
    { codigo: 1, nombre: 'samsung', precio: 1200000 },
    { codigo: 2, nombre: 'LG', precio: 1000000 },
  ];
}
