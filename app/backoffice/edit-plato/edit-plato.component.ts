import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel,FormControl,  ReactiveFormsModule } from '@angular/forms';  

import { Router, ActivatedRoute, Params } from '@angular/router';
import { FiltroPipe } from '../../pipe/filtro.pipe';
import {Card} from "../../model/card";
import {Cats} from "../../model/cat";
import { TakeAwayService } from '../../service/takeaway.service';

declare var $: any;
@Component({
  selector: 'app-edit-plato',
  templateUrl: './edit-plato.component.html',
  styleUrls: ['./edit-plato.component.css'],
  providers: [TakeAwayService]
})

export class EditPlatoComponent implements OnInit {
	public plato:Card;
  public categorias:Cats;
	public id:string;
	public status:string;
	public errorMessage:any;
  constructor(
  	private _takeAwayService: TakeAwayService,
  	private _route:ActivatedRoute,
  	private _router: Router
  	) { }

  ngOnInit() {
  	this.plato= new Card(0,"","","",0,"",0);
    this.getCategorias();
  	this.getPlatoInfo();
    $('select').material_select();
  }
  getCategorias (){
  this._takeAwayService.getCategoria()
    .subscribe(
      result => {
        this.categorias = result.data;
        console.log("categorias: "+this.categorias);
      });
}
  getPlatoInfo(){
  	this._route.params.forEach(
  		(params: Params)=>
  		{this.id=params['id']}); 

  	this._takeAwayService.getPlato(this.id)
      .subscribe(
          result => {
            if (result.status=="success"){
             this.plato=result.data;
            }
            else {
              alert("Error petición Mysql");
            }
          },
          error =>{
            alert('Error al obtener listado platos');
          }
        )

  }

  onSubmit(){
  	console.log(this.plato);
  	
    this._takeAwayService.editPlato(this.id,this.plato).subscribe(
          result => {
              this.status=result.status;
              if(this.status !== "success"){
                console.log(this.status);
              }
              else {console.log("Datos actualizados")}
                        
          },
          error => {
            this.errorMessage = <any>error;
            
            if(this.errorMessage !== null){
              console.log(this.errorMessage);
              alert("Error en la petición editPlato");
            }
          }
        );

  }

}// fin del archivo
export class SelectControlComp {
  categorias = JSON.parse(this.categorias);
  // [
  //   {name: 'Arizona', abbrev: 'AZ'},
  //   {name: 'California', abbrev: 'CA'},
  //   {name: 'Colorado', abbrev: 'CO'},
  //   {name: 'New York', abbrev: 'NY'},
  //   {name: 'Pennsylvania', abbrev: 'PA'},
  // ];
}