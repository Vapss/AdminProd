import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Category } from 'src/app/modelo/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  titulo : string = 'Categorias';
  category : Category = new Category();
  
  constructor() { }

  ngOnInit(): void {
  }

  almacenarCat() : void{
    Swal.fire({
      title: 'Categoria almacenada',
      text: 'La categoria se almaceno correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

}
