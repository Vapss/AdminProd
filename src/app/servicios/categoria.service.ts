import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../modelo/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlEndPoint: string = 'localhost:8082/api/producto';
  constructor(private http : HttpClient) { }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getCategorias(): Observable<Category[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Category[])
    );
  }

  eliminarCategoria(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }

  leerCategoria(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.urlEndPoint}/${id}`);
  }

  createCategory(category: object): Observable<object> {
    return this.http.post(`${this.urlEndPoint}`, category, {headers: this.httpHeaders});
  }

  actualizarCategoria(id: number, value: any): Observable<Category> {
    return this.http.put<Category>(`${this.urlEndPoint}/${id}`, value, {headers: this.httpHeaders});
  }

  buscarCategoria(term: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.urlEndPoint}/buscar/${term}`).pipe(
      map(response => response as Category[])
    );
  }
}
