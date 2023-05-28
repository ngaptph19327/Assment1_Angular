import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  product: IProduct[] = []

  constructor(private productService: ProductService) { }
  getList() {
    this.productService.getAll().subscribe(data => {
      this.product = data
      console.log(this.product)
    })
  }
  ngOnInit() {
    this.getList()
  }
  onDelete(id: number) {
    this.productService.remove(id).subscribe(item => {
      console.log(item)
      this.getList()
    })
  }
}
