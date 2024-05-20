import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openMyResume(){
    window.open('assets/files/DurgaCharan_Tadi_Resume.pdf','_blank');
  }
} 