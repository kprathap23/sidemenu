import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private categoriesUrl = 'https://dummyjson.com/products/categories';
  private productsUrl = 'https://dummyjson.com/products/category';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.categoriesUrl);
  }

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get<any>(
      `${this.productsUrl}/${category.replace(' ', '-')}`
    );
  }
}
