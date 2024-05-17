import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductCategoryService } from '../../services/product-category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent implements OnInit {
  productCategories: ProductCategory[] = [];

  constructor(private productServiceCat: ProductCategoryService) { };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listProductCategoies();
  }

  listProductCategoies() {
    this.productServiceCat.getProductCategoryList().subscribe(
      data => {
        this.productCategories = data;
        console.log(this.productCategories);
      }
    );
  }
}
