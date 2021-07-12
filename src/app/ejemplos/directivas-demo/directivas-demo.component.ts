import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-demo',
  templateUrl: './directivas-demo.component.html',
  styleUrls: ['./directivas-demo.component.scss']
})
export class DirectivasDemoComponent implements OnInit {

  seccionActiva = 0;
  fechaActual = new Date();
  alumnos = [
    {nombre: "Daniel Leonardo"},
    {nombre: "German Magdiel"},
    {nombre: "Dulce Consuelo"},
    {nombre: "Franco Daniel"},
    {nombre: "Kevin"}
  ];

  cursos = [
    {nombre: "Desarrollo avanzado de aplicaciones II", precio: 8000},
    {nombre: "Base de datos II", precio: 6500},
    {nombre: "Proyecto Certificador II", precio: 10000},
    {nombre: "Inglés técnico II", precio: 5000}   
  ]
  constructor() { }

  ngOnInit(): void {
  }

  mostrarAlumnos(): void{
    this.seccionActiva = 0;
  }

  mostrarCursos(): void{
    this.seccionActiva = 1;
  }


}
