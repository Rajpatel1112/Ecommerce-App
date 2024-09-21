import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  getProductById(id: number): Observable<Product | null> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map(products => products.find(product => product.id === id) || null)
    );
  }
}