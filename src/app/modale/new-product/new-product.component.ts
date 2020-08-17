import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';
import { Router ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product: Product = {
    
    nombre:'',
    marca:'',
    description:'',
    imageURL:'',
    precio:0
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activateRouter.snapshot.params;
    if(params){
      this.productService.getProducts()
      .subscribe(
        res => {
          console.log(res);
          this.product=res;
          
        }
      )
    }
  }

  submitProduct(){
    this.productService.createProduct(this.product)
      .subscribe(
        res => {console.log(res);
        this.router.navigate(['producto']);
      },
      err => console.log(err)
      )
  }
}
