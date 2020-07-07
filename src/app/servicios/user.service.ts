import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  obtenerUsuarios(){
    return this.http.get<User[]>("https://pro-angular-json-kbefbqorma-ue.a.run.app/usuarios");
  }
  obtenerUsuarioPorId(id:number){
    return this.http.get<User>("https://pro-angular-json-kbefbqorma-ue.a.run.app/usuarios/"+id);
  }
  crearUsuario(user:User){
    return this.http.post("https://pro-angular-json-kbefbqorma-ue.a.run.app/usuarios", user);
  }
  editarUsuario(user:User){
    return this.http.put("https://pro-angular-json-kbefbqorma-ue.a.run.app/usuarios/"+user.id, user);
  }
  login(nombre:string,password:string){
    return this.http.get<User[]>("https://pro-angular-json-kbefbqorma-ue.a.run.app/usuarios?nombre="+nombre+"&&password="+password);
  }
}
