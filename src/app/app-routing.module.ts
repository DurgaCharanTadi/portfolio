import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './components/main-content/experience/experience.component';
import { EducationComponent } from './components/main-content/education/education.component';
import { CertificationsComponent } from './components/main-content/certifications/certifications.component';
import { ProjectsComponent } from './components/main-content/projects/projects.component';

const routes: Routes = [
  { path:'', component: ExperienceComponent },
  { path:'education', component: EducationComponent },
  { path:'certifications', component: CertificationsComponent},
  { path:'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
