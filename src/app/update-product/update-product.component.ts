import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  product: IProduct = {
    id: 0,
    name: "",
    price: 0,
    img: ""
  }

  constructor(private productService: ProductService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.productService.getById(id).subscribe(data => {
        this.product = data
      })
    })
  }
  onSubmit() {
    this.productService.Update(this.product).subscribe(item => {
      console.log(item)
    })
  }

}
