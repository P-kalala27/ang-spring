import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product: Products = new Products();
  constructor(private productService: ProductService,
    private router: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.router.paramMap.subscribe(() => {
      this.handleProductDetail();
    });
  }

  handleProductDetail() {
    this.productService.getProductList(theId).subscribe(
      date => {
        this.product = date;
      }
    );
  }

  addToCart() {

    console.log(`Adding to cart: ${this.product.name}, ${this.product.unitPrice}`);
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);

  }

}
