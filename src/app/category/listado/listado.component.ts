import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modelo/category';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  titulo: string = 'Listado de categorías';
  listaDeCategorias: Category[]= [];
  constructor() { }

  ngOnInit(): void {
  }

}
