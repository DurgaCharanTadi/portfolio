import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  open_youtubeClone(){
    window.open('https://durgacharantadi.github.io/youtube-clone-ui/');
  }
  open_portfolioGit(){
    window.open('https://github.com/DurgaCharanTadi/portfolio');
  }
  open_weatherApp(){
    window.open('https://durgacharantadi.github.io/weather-app-reactjs/');
  }
  open_gitRepo(){
    window.open('https://github.com/DurgaCharanTadi');
  }
}
