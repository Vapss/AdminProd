import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Category } from 'src/app/modelo/category';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  titulo : string = 'Categorias';
  category : Category = new Category();
  submitted = false;

  constructor(private CategoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.submitted = false;
  }

  categorysaveform=new FormGroup({
    nombreCategoria: new FormControl('',[Validators.required,Validators.minLength(3)]),
    descripcionCategoria: new FormControl('',[Validators.required,Validators.minLength(3)])
  });

  saveCategory(saveCategory : Category){
    this.category = new Category();
    this.category.nombreCategoria = this.categorysaveform.value['nombreCategoria'];
    this.category.descripcionCategoria = this.categorysaveform.value['descripcionCategoria'];
    this.submitted = true;
    this.save();
}
save() {
  this.CategoriaService.createCategory(this.category)
    .subscribe(data => console.log(data), error => console.log(error));
  this.category = new Category();
}

  get CategoryName(){
    return this.categorysaveform.get('nombreCategoria');
  }

  get CategoryDescription(){
    return this.categorysaveform.get('descripcionCategoria');
  }
  
  addCategoryForm(){
    this.submitted = false;
    this.categorysaveform.reset();
  }
}
