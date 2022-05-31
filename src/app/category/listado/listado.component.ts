import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modelo/category';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  titulo: string = 'Listado de categorías';
  listaDeCategorias: Category[]= [

    {
      idCategoria : 1,
      nombreCategoria : 'yo1',
      descripcionCategoria: 'ya'
  
    },
    {
      idCategoria : 2,
      nombreCategoria : 'yo2',
      descripcionCategoria: 'ya'
  
    },
    {
      idCategoria : 3,
      nombreCategoria : 'yo3',
      descripcionCategoria: 'ya'
  
    },
    {
      idCategoria : 4,
      nombreCategoria : 'yo4',
      descripcionCategoria: 'ya'
  
    }
  ];
  constructor(private servicio : CategoriaService) { }

  ngOnInit(): void {
    this.servicio.getCategorias().subscribe(
      (categorias) => this.listaDeCategorias = categorias
    );
  }

  eliminar(categoria: Category): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la categoría ${categoria.nombreCategoria}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarCategoria(categoria.idCategoria).subscribe(
          () => {
            this.listaDeCategorias = this.listaDeCategorias.filter(c => c !== categoria)
            Swal.fire(
              'Eliminado!',
              `La categoría ${categoria.nombreCategoria} ha sido eliminada con éxito.`,
              'success'
            )
          }
        );
      }
    })
  }

}
