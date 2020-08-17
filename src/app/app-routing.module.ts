import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedoresComponent } from './components/proveedor/proveedores.component';
import { HomeComponent } from './components/home/home.component';
import { NewProductComponent } from './modale/new-product/new-product.component';



const routes: Routes = [
 
  {path: 'newproduct/edit/:id', component: NewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
