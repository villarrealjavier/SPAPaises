import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSearch} from '../interfaces/pais-interfaz.Interfaces';


@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {
   


  constructor(private http:HttpClient) { 
   
  }

  private url:string='https://restcountries.com/v3.1/name/'
  private _results: PaisSearch[]=[]

  get results(){
    return [...this._results]
  }

  buscarpais(query:string):Observable<PaisSearch[]>{
    let clean = query.trim();
    return this.http.get<PaisSearch[]>(`${this.url}${clean}`)

  }
  
  
 
}
