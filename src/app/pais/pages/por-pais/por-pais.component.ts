import { Component, Input, OnInit } from '@angular/core';
import { PaisServiceService } from '../../services/pais-service.service';
import { PaisSearch } from '../../interfaces/pais-interfaz.Interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',

})
export class PorPaisComponent implements OnInit {

  constructor(private paisService: PaisServiceService, private http: HttpClient) { }
 paises:PaisSearch []=[];
  ngOnInit(): void {
  }
  

  

  buscarPais(){
    return this.paisService.buscarpais(this.nuevo)
  }
  get results():PaisSearch[]{
  return this.paisService.results
  }

  buscar ( termino:string){
    this.nuevo=termino;
    this.paisService.buscarpais( this.nuevo)
    .subscribe({
        next: (resp) =>{
            this.paises= resp;
        },
        error: (err) =>{

        }
    })
  }
 

  @Input() nuevo: string =""

}
