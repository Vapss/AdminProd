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
  listaDeCategorias: Category[]= [];
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
  actualizar(categoria: Category): void {
    Swal.fire({
      title: 'Actualizar categoría',
      text: 'Ingrese el nuevo nombre de la categoría',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (nombre) => {
        if (!nombre) {
          return Swal.showValidationMessage(
            `Ingrese el nombre de la categoría`
          )
        }
        return this.servicio.actualizarCategoria(categoria.idCategoria, nombre).toPromise();
      }
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Actualizado!',
          `La categoría ${result.value} ha sido actualizada con éxito.`,
          'success'
        )
      }
    })
  }
}
