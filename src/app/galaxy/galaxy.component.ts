import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GalaxyService } from '../service/galaxy.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.css']
})
export class GalaxyComponent {

  rebelName ="";
  planeta ="";
  error: boolean = false;
  registroOk = false;

  constructor(public _galaxyService: GalaxyService) {
   }

  guardar(forma: NgForm){

    this._galaxyService.guardarRebelde(this.rebelName, this.planeta).subscribe(
      result => {
        console.log(JSON.parse(result));
        this.registroOk = true;
        setTimeout( ()=> this.registroOk =  false, 3000)
      },
      error => {
          console.log(<any>error);
          this.error = true;
          setTimeout( ()=> this.error =  false, 3000)
      }
    );
  }

}
