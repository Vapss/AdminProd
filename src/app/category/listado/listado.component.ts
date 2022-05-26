import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modelo/category';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  titulo: string = 'Listado de categorías';
  listaDeCategorias: Category[]= [];
  constructor(private servicio : CategoriaService) { }

  ngOnInit(): void {
    this.servicio.getCategorias().subscribe(
      (categorias) => this.listaDeCategorias = categorias
    );
  }

}
