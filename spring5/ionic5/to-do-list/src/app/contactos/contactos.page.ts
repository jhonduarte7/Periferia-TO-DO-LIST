import { Component, OnInit } from '@angular/core';
import { Contacto } from './contacto';
import { ContactoService } from './contacto.service';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {


  usuarios: Contacto[];

  constructor(private clienteCsHOW: ContactoService) { }

  ngOnInit() {

    this.clienteCsHOW.getClientes().subscribe(

      usuarios => this.usuarios = usuarios

    );
  }


  delete(usuario: Contacto): void {
    this.clienteCsHOW.delete(usuario.id).subscribe(

      response => {
            this.usuarios = this.usuarios.filter(usu => usu !== usuario)
      })
  }

}
