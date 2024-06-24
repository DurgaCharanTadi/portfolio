import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openMyResume(){
    window.open('assets/files/DurgaCharanTadi-Resume.pdf','_blank');
  }
} 