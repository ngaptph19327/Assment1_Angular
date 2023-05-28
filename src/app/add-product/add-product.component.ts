import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product: IProduct = {
    id: 0,
    name: "",
    price: 0,
    img: ""
  }
  constructor(private productService: ProductService) { }
  onSubmit() {
    this.productService.create(this.product).subscribe(data => {
      console.log(data)
    })

  }

}
