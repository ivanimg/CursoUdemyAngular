import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio: number;
  constructor() {
    // Recomendado hacer esto en el constructor
    this.anio = new Date().getFullYear() + 1;
  }
}
