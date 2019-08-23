import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contactos/contacto';
import { ContactoService } from '../contactos/contacto.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  private usuario: Contacto = new Contacto();

  constructor(private usuarioService:ContactoService, private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.cargarUsuario();
    }

  cargarUsuario(): void{
      this.activatedRoute.params.subscribe(params =>{
        let id = params['id']
        if (id){
          this.usuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario)
        }
      
      })
  }

  create():void{

   this.usuarioService.create(this.usuario).subscribe(
    Response => this.router.navigate(['/contactos'])

   )
  }

  update():void{
    this.usuarioService.update(this.usuario)
    .subscribe( usuario => {
      this.router.navigate(['/home'])
    })
  }



}
