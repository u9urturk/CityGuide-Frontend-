import { Injectable } from '@angular/core';
declare let alertify:AlertifyService

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }


  success(message:string){  
    alertify.success(message)
  }

  warning(message:string){  
    alertify.warning(message)
  }

  Error(message:string){  
    alertify.Error(message)
  }
}
