import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',

})
export class VerPaisComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.params['id']);
  }
 



  ngOnInit(): void {
  }

}
