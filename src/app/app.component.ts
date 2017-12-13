import { Component } from '@angular/core';
import { DataService } from './data.service';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger ('myAnimations',[
      state('small', style({
        transform: 'scale(1)',
      })),

      state('large', style({
        transform: 'scale(5.2)',
      })),

      transition('small <=> large', animate('300ms ease-in')),
    ]),
  ]
})
export class AppComponent {
  title = 'app';

  myObject = {
    Name: 'Devi',
    Gender: 'Male',
    Age: '27'
  }

  constructor (private dataService:DataService){
  }
  CallingService:string = '';

  ngOnInit(){
    console.log(this.dataService.cars);
    this.CallingService = this.dataService.myData();
  } 

  deviNumber: string = '6038584491';
 // deviEmail:string =  'devi.singh@dss.com' 


  titleClass = {
    'red-title':'red',
     'big-font': '40px'
  } 

  state: string = 'small'
  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
