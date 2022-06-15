import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CategoriaService } from './servicios/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminProd';
  faCoffee = faCoffee;

  constructor(
    private categoriaService: CategoriaService
  ) { }
}
