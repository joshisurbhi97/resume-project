import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificateComponent } from './certificate/certificate.component';
import { HobbyComponent } from './hobby/hobby.component';

const routes: Routes = [
  // { path: '', component: LandingPageComponent, data: { title: 'First Component' }, pathMatch: 'full' },
  // {
  //   path: 'login', component: LoginComponent, data: {title: 'First Component'},
  //   // children: [
  //   //   {path: '', component: LoginComponent}
  //   // ]
  // },
  // { path:'register', component: RegisterComponent},
  // { path: 'main', component: HomeLayoutComponent,
  //   children: [
  //     { path: '', component: PersonalInfoComponent, pathMatch: 'full' },
  //     { path: 'first', component: PersonalInfoComponent },
  //     { path: 'second', component: EducationComponent }
  //   ]
  // }




//   { path: '', component:LandingPageComponent, data: { title: 'First Component' }, pathMatch: 'full' },
//   { path: 'login', component:LoginComponent,
//   children:[
//     {path: '', component:LoginComponent, pathMatch: 'full'},
//     { path: 'login', component:LoginComponent},
//     { path: 'register', component:RegisterComponent}

//   ]
// },

//   { path: 'main', component: HomeLayoutComponent,
//     children: [
//       { path: '', component: PersonalInfoComponent, pathMatch: 'full' },
//       { path: 'first', component: PersonalInfoComponent },
//       { path: 'second', component: EducationComponent }
//     ]
//   }





{ path: '', component:LandingPageComponent, data: { title: 'First Component' }, pathMatch: 'full' },
  {
     path: 'login', component:LoginComponent,
  children:[
    {path: '', component:LoginComponent, pathMatch: 'full'}
  ]
},

{
  path: 'register', component:RegisterComponent,
children:[
 {path: '', component:RegisterComponent, pathMatch: 'full'}
 ]
},


  { path: 'main', component: HomeLayoutComponent,
    children: [
      { path: '', component: PersonalInfoComponent, pathMatch: 'full' },
      { path: 'personal', component: PersonalInfoComponent },
      { path: 'education', component: EducationComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'certificate', component: CertificateComponent },
      { path: 'hobby', component: HobbyComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
