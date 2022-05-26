import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../modelo/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlEndPoint: string = 'http://localhost:3306/api/categoria';
  constructor(private http : HttpClient) { }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getCategorias(): Observable<Category[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Category[])
    );
  }
}
