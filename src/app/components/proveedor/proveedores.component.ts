import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service';
import { Router } from '@angular/router';
import { Proveedor } from '../../interfaces/Proveedor';



@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

   proveedores:any[];

  constructor(private proveedorService: ProveedorService,
    private router: Router) { }

  ngOnInit() {
    this.getProveedores();
  }

  getProveedores(){
    this.proveedorService.getProveedores()
    .subscribe(
      res => {
        this.proveedores=res.proveedores;
        console.log(res.proveedores)
      },
      err =>  console.log(err)
    )
  }

  btnClick=function(){
    this.router.navigate(['/newproveedor']);
  }
  deleteProveedor(id: string){
    this.proveedorService.deleteProveedor(id)
    .subscribe(
      res =>{
        this.getProveedores();
      }
    )
  }

}
