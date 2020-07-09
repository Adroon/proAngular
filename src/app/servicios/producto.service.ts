import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../components/model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  obtenerProductos(){
    return this.http.get<Producto[]>("https://pro-angular-json-kbefbqorma-ue.a.run.app/productos");
  }
  obtenerProductoPorId(id:number){
    return this.http.get<Producto>("https://pro-angular-json-kbefbqorma-ue.a.run.app/productos/"+id);
  }
  obtenerProductoPorIdDeUsuario(id:number){
    return this.http.get<Producto[]>("https://pro-angular-json-kbefbqorma-ue.a.run.app/productos/"+id);
  }
  crearProducto(producto:Producto){
    return this.http.post("https://pro-angular-json-kbefbqorma-ue.a.run.app/productos", producto);
  }
  editarProducto(producto:Producto){
    return this.http.put("https://pro-angular-json-kbefbqorma-ue.a.run.app/productos/"+producto.usuarioId, producto);
  }
}
