import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/privado/prueba/prueba.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarProductoComponent } from './components/privado/agregar-producto/agregar-producto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { MisProductosComponent } from './components/privado/mis-productos/mis-productos.component';
import { PerfilComponent } from './components/privado/perfil/perfil.component';
import { BuscarComponent } from './components/privado/buscar/buscar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Buscar2Component } from './components/buscar2/buscar2.component';
import { PantallaProductoComponent } from './components/pantalla-producto/pantalla-producto.component';
import { UsuarioLogeadoComponent } from './components/privado/iniciolog/usuario-logeado.component';
import { ComofuncaComponent } from './components/comofunca/comofunca.component';
import { PantallaProductonologComponent } from './components/privado/pantalla-productonolog/pantalla-productonolog.component';



@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    InicioComponent,
    AgregarProductoComponent,
    RegistroComponent,
    LoginComponent,
    MisProductosComponent,
    PerfilComponent,
    BuscarComponent,
    Buscar2Component,
    PantallaProductoComponent,
    UsuarioLogeadoComponent,
    ComofuncaComponent,
    PantallaProductonologComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
