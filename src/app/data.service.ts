import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['ford','GMC', 'Buick'];

  myData(){

    return 'This is the Data';
  }

}
