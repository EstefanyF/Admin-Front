import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';

import { PagosComponent } from './components/pagos/pagos.component';
import { ProveedoresComponent } from './components/proveedor/proveedores.component';
import { UserComponent } from './components/user/user.component';
//rutas
import { app_routing } from './app.routers';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PopupModule} from 'ng2-opd-popup';
import { CreateuserComponent } from './modale/new-user/createuser/createuser.component';

import { NewProveedorComponent } from './modale/new-proveedor/new-proveedor.component'
import { NewProductComponent } from './modale/new-product/new-product.component';
//servicios

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HomeComponent,
    PagosComponent,
    NewProductComponent,
    UserComponent,
    ProveedoresComponent,
    CreateuserComponent,
    NewProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PopupModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
