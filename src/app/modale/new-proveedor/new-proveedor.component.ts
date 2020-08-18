import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from '../../interfaces/Proveedor';
import { ProveedorService } from '../../services/proveedor.service';



@Component({
  selector: 'app-new-proveedor',
  templateUrl: './new-proveedor.component.html',
  styleUrls: ['./new-proveedor.component.css']
})
export class NewProveedorComponent implements OnInit {

  proveedor: Proveedor = {
    
    nombre: '',
    diretion: '',
    phone: 0
  };

  constructor(
    private proveedorService: ProveedorService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  submitProveedor(){
    this.proveedorService.createProveedor(this.proveedor)
      .subscribe(
        res => {console.log(res);
        this.router.navigate(['proveedor']);
        },
        err => console.log(err)
      )
  }

}
