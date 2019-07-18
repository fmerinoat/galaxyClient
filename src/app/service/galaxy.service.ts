import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Observable } from 'rxjs';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable({
  providedIn: 'root'
})
export class GalaxyService {

  constructor( private http: HttpClient) {
  }

  guardarRebelde(rebelName: string, planet: string): Observable<any>{
    let params: string[];
    params=[rebelName, planet];
    
    return this.http.post<any>('/api/rebel/add',params); 
  }


}
