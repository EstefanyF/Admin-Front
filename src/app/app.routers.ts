import { RouterModule, Route, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresComponent } from './components/proveedor/proveedores.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { CreateuserComponent } from './modale/new-user/createuser/createuser.component';
import { NewProductComponent } from './modale/new-product/new-product.component';
import { NewProveedorComponent } from './modale/new-proveedor/new-proveedor.component';







const APP_ROUTING :Routes = [
    {path: 'producto', component: ProductosComponent},
    {path: 'proveedor', component: ProveedoresComponent},
    {path: 'clientes', component: UserComponent},
    {path: 'pagos', component: PagosComponent},
    {path: 'newuser', component: CreateuserComponent},
    {path: 'newuser/edit/:id', component: CreateuserComponent},
    {path: 'newproveedor', component: NewProveedorComponent},
    {path: 'newproduct', component: NewProductComponent},
    {path: 'newproduct/edit/:id', component: NewProductComponent}
];

export const app_routing = RouterModule.forRoot(APP_ROUTING);
