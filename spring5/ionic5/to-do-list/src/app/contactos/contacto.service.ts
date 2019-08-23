import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { USUARIOS } from './contactos.json';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ContactoService {

  private urlEndPoint: string = 'http://localhost:8080/api/usuarios';

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Contacto[]>{
    
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Contacto[])
      )  
    
  }

   create(usuario: Contacto) : Observable<Contacto>{
      
     return this.http.post<Contacto>(this.urlEndPoint, usuario, {headers: this.httpHeaders})

   }

   getUsuario(id): Observable<Contacto>{
    
    return this.http.get<Contacto>(`${this.urlEndPoint}/${id}`)

   }

   update(usuario: Contacto): Observable<Contacto>{
    return this.http.put<Contacto>(`${this.urlEndPoint}/${usuario.id}`, usuario, {headers: this.httpHeaders})

   }

   delete(id: number): Observable<Contacto>{

     return this.http.delete<Contacto>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
   }


}
