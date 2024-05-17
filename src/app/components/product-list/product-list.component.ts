import { Component, OnInit } from '@angular/core';
import { Products } from '../../common/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Products[] = [];
  constructor(private productService: ProductService) { }
  //initialisation de facon autonome
  ngOnInit(): void {
    this.ListProducts();
  }

  ListProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
        console.log(this.products);
      }
    );
  }

}





