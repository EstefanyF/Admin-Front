import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Proveedor } from '../interfaces/Proveedor';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProveedores():Observable <any>{
    return this.http.get<any>(`${this.BASE_URL}/proveedor`);
  }

  getProveedor(id: string):Observable<Proveedor>{
    return this.http.get<Proveedor>(`${this.BASE_URL}/proveedor/${id}`);
  }

  createProveedor(proveedor: Proveedor):Observable<Proveedor>{
    return this.http.post<Proveedor>(`${this.BASE_URL}/proveedor/create`, proveedor);
  }

  deleteProveedor(id: string): Observable<Proveedor>{
    return this.http.delete<Proveedor>(`${this.BASE_URL}/proveedor/delete?proveedorID=${id}`);
  }

  updateProveedor(id:string, proveedor:Proveedor): Observable<Proveedor>{
    return this.http.put<Proveedor>(`${this.BASE_URL}/proveedor/update?proveedorID=${id}`,proveedor);
  }
}
