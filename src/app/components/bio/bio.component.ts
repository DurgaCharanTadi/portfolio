import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {
  openMyLinkedIn(){
    window.open('https://www.linkedin.com/in/durga-charan-tadi-a92463252/','_blank');
  }
}