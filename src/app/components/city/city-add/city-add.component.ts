import { Component, OnDestroy, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
import {Editor,Toolbar,toDoc} from 'ngx-editor';

import { City } from 'src/app/models/city';


@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
  providers:[CityService]
  
})
export class CityAddComponent implements OnInit,OnDestroy {
  editor:Editor;
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ]

  constructor( private cityService : CityService,
    private formBuilder:FormBuilder,
   ) { }
  
  city:City;
  cityAddForm:FormGroup;
  dataLoaded=false;
  input=false;
  html:string='';
  
  
  ngOnInit(): void {
    this.createCityForm();
    this.editor = new Editor();
    
    
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  createCityForm(){
    this.cityAddForm=this.formBuilder.group(
      {name:["",Validators.required],
      description:["",Validators.required]
      
    })
    }

    

  add(){
    if(this.cityAddForm.valid){
     this.city=Object.assign({},this.cityAddForm.value)
     this.city.userId=1
     console.log(this.city);
      //Todo
      
      this.cityService.add(this.city);
      
      
      
    }
  }

}
