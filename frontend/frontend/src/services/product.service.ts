import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private baseUrl = 'http://localhost:8080/api/products';
    private categoryUrl = `http://localhost:8080/api/product-category`;

    constructor(private httpClient: HttpClient) { }

    getProduc(theProductId: number): Observable<Product>{

        const productUrl = `${this.baseUrl}/${theProductId}`;

        return this.httpClient.get<Product>(productUrl);
    }

    getProductList(): Observable<Product[]> {
      return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
        map(response => response._embedded.products)
      );
    }
  }

  interface GetResponse {
    _embedded: {
      products: Product[];
    }
}
