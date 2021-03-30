import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers:[CityService]
})
export class CityComponent implements OnInit {

  constructor(private cityService:CityService) {}
  cities:City[];
  ngOnInit(): void {
    this.cityService.getCities().subscribe(data=>{
      this.cities=data;
      
    })
  }

}
