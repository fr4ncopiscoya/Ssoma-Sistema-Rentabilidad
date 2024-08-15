import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ssoma-Sistema-Rentabilidad';
  login: boolean = true;
  constructor(){
    console.log("hola xd");
    
  }
}
