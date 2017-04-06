import { Component, OnInit } from '@angular/core';

import { FiltroPipe } from '../pipe/filtro.pipe';
import {Card} from "../model/card";
import { TakeAwayService } from '../service/takeaway.service';
import { InicioComponent } from '../inicio/inicio.component';
import { EditPlatoComponent } from '../backoffice/edit-plato/edit-plato.component';
import { EditCategoriaComponent } from '../backoffice/edit-categoria/edit-categoria.component';


declare var $ : any;
@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css'],
  providers: [TakeAwayService]
})
export class BackofficeComponent extends InicioComponent implements OnInit {
  public titulo;
  public descripcion;
  public precio;
  public imagen;
   ngOnInit() {
    this.getCategorias();
    this.getPlatos();
  }
  onModal(titulo,descripcion,precio,imagen){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
    $('.modal').modal();
    $('#vistaCard').modal('open');
  }
}//fin del archivo
