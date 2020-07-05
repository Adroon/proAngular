import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PruebaComponent } from './components/privado/prueba/prueba.component';
import { AgregarProductoComponent } from './components/privado/agregar-producto/agregar-producto.component';
import { MisProductosComponent } from './components/privado/mis-productos/mis-productos.component';
import { PerfilComponent } from './components/privado/perfil/perfil.component';
import{RegistroComponent} from './components/registro/registro.component';
import{LoginComponent} from './components/login/login.component';
import { Buscar2Component } from './components/buscar2/buscar2.component';
import { PantallaProductoComponent } from './components/pantalla-producto/pantalla-producto.component';
import { UsuarioLogeadoComponent } from './components/privado/iniciolog/usuario-logeado.component';
import { LoginGuard } from './guards/login.guard';
import { PantallaProductonologComponent } from './components/privado/pantalla-productonolog/pantalla-productonolog.component';
import { BuscarComponent } from './components/privado/buscar/buscar.component';





const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"Home", component:InicioComponent},
  {path:"login", component:LoginComponent},
  {path : "registro" , component:RegistroComponent},
  {path :  "buscar" , component:Buscar2Component},
  {path : "pantalla-producto" , component:PantallaProductoComponent},

  {path: "privado", component:PruebaComponent, canActivate: [LoginGuard],
    children:[
      {path: "", component:UsuarioLogeadoComponent},
      {path: "inicio", component:UsuarioLogeadoComponent},
      {path: "prueba", component:PruebaComponent},
      {path : "perfil/:id" , component:PerfilComponent},
      {path : "agregar-producto" , component:AgregarProductoComponent},
      {path : "mis-productos" , component:MisProductosComponent},
      {path : "pantalla-producto", component:PantallaProductonologComponent},
      {path : "buscar" , component:BuscarComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
