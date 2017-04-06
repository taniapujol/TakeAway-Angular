import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Card} from '../model/card';

@Injectable()
export class TakeAwayService {

  constructor(private _http: Http) { }
// obtenemos los platos de la base de datos
getPlatos(){
	return this._http.get("http://localhost/tania/bdApi/api.php/getPlatos")
			.map(res=>res.json());
}
getPlato(id:string){
	return this._http.get("http://localhost/tania/bdApi/api.php/getPlatos/"+id)
			.map(res=>res.json());
}
// obtenemos las categorias de la base de datos
getCategoria(){
	return this._http.get("http://localhost/tania/bdApi/api.php/getCategoria")
			.map(res=>res.json());
}
// obtemos los platos para editar los
editPlato(id: string, plato: Card) {
    let json = JSON.stringify(plato);
    let params = "json="+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.post("http://localhost:8080/tkaApi/api.php/editPlato/"+id, 
        params, {headers: headers}).map(res => res.json());
  }

}// fin del archivo