import { Component, OnInit } from '@angular/core';

import { Card } from '../model/card';
import { FiltroPipe } from '../pipe/filtro.pipe';
import { TakeAwayService } from '../service/takeaway.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [TakeAwayService]
})
export class InicioComponent implements OnInit {
  public platos;
  public categorias;
  public numPlatos;
  public numCats;
  constructor ( private _service: TakeAwayService ) {  } 

  ngOnInit() {
    this.getCategorias();
    this.getPlatos();
  }
getCategorias (){
  this._service.getCategoria()
    .subscribe(
      result => {
        this.categorias = result.data;
        this.numCats = result.cont;
        console.log("categorias: "+this.categorias);
      });
}
getPlatos(){
  this._service.getPlatos()
    .subscribe(
      result => {
        this.platos = result.data;
        this.numPlatos = result.cont;
        console.log("platos: "+this.platos);
      });
}
} // final del archivo
