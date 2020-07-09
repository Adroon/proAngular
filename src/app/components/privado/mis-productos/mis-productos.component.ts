import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../model/User';
import { UserService } from 'src/app/servicios/user.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from '../../model/Producto';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css']
})
export class MisProductosComponent implements OnInit {
user:User;
idProducto:number;
nombre: string;
descripcion: string;
estado: string;
imagen: string;
tipo: string;
marca: string;
condicion: string;
idUsuario: number;
usuarioId: number;
users:User[];
usuarioComparar={
  id: this.idUsuario = this._routeParams.snapshot.params['id']
};
productos:Producto[];
productosporID:Producto[];
  constructor(private router: Router, private servicio: UserService, private _routeParams: ActivatedRoute, private serviciop: ProductoService) { }

  ngOnInit(): void {
    this.user = this._routeParams.snapshot.params['id'];
    this.idUsuario = this._routeParams.snapshot.params['id'];
    this.idProducto = this._routeParams.snapshot.params['id'];
    this.cargarProductos();
  }

  cargarProductos(){
    this.serviciop.obtenerProductos().subscribe(
      data =>{
        this.productos = data;
      }, 
      error =>{ 
        alert( "Ocurrio un error" );
        console.log( "ERROR", error );
       }
    );
  }




  // cargarProductoPorId(id:number){
  //   this.serviciop.obtenerProductoPorId(id).subscribe(
  //     data =>{
  //       this.productoo.id = data.id;
  //       this.productoo.nombre = data.nombre;
  //       this.productoo.descripcion = data.descripcion;
  //       this.productoo.estado = data.estado;
  //       this.productoo.imagen = data.imagen;
  //       this.productoo.tipo = data.tipo;
  //       this.productoo.marca = data.marca;
  //       this.productoo.condicion = data.condicion;
  //       this.productoo.usuarioId = data.usuarioId;
  //       this.productosporID.push(this.productoo);
  //     },
  //     error =>{
  //       alert("Error"+ error);
  //     }
  //   );
  // }




  logout(){
    localStorage.removeItem( "user" );
    this.router.navigate(['Home']);
  }
}
