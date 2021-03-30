import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient:HttpClient,
    private alertify:AlertifyService,
   private router:Router) { }
  path="https://localhost:44359/api/";



  getCities():Observable<City[]>{
    return this.httpClient.get<City[]>(this.path+"cities");
  }

  getCityById(cityId:number):Observable<City>{
    return this.httpClient.get<City>(this.path+"cities/detail/?id="+cityId)
  }

  getPhotosByCity(cityId:number):Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.path+"cities/photos/?cityId="+cityId);
  }

  add(city:City){
    this.httpClient.post(this.path+'cities/add',city).subscribe(data=>{
      this.alertify.success("Şehir başarıyla eklendi !")
      this.router.navigateByUrl('/cityDetail/'+data["id"])
    });
  }


}
