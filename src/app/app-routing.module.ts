import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CategoryComponent } from './category/category.component';
import { ListadoComponent } from './category/listado/listado.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'listado', component: ListadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
