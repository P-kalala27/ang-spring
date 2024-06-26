import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Products } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = `http://localhost:8080/api/products`;
  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Products[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(
        map(response => response._embedded.products)
      );
  }
  getProduct(theId: number): Observable<Products> {
    return this.httpClient.get<Products>(`${this.baseUrl}/${theId}`);
  }
}


interface GetResponse {
  _embedded: {
    products: Products[];
  };
}


