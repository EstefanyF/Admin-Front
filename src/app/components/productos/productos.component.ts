import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  products:any[];

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe(
      res => {
        this.products= res.products;
        console.log(res.products)
      },
      err => console.log(err)
    )

  }

  btnClick=function(){
    this.router.navigate(['/newproduct']);
  }

  deleteProduct(id: string){
    this.productService.deleteProduct(id)
    .subscribe(
      res =>{
        this.getProducts();
      }
    )
  }
}
