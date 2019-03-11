// import { NgtUniversalModule } from '@ng-toolkit/universal';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { StepperComponent } from './stepper/stepper.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RegisterComponent } from './register/register.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificateComponent } from './certificate/certificate.component';
import { HobbyComponent } from './hobby/hobby.component';
// import { MatIconModule } from '@angular/material/icon/typings/icon-module';



// const appRoutes: Routes = [
//   // { path: '', component: PersonalInfoComponent, data: { title: 'First Component' } },
//   // { path: 'first', component: PersonalInfoComponent, data: { title: 'First Component' } },
//   // { path: 'second', component: EducationComponent, data: { title: 'Second Component' } }


//   // { path: '', component: LoginComponent, data: { title: 'First Component' }, pathMatch: 'full' },
//   // {
//   //   path: 'login', component: LoginComponent, data: {title: 'First Component'},
//   //   children: [
//   //     {path: '', component: LoginComponent}
//   //   ]
//   // },
//   // { path: 'main', component: HomeLayoutComponent,
//   //   children: [
//   //     { path: '', component: PersonalInfoComponent, pathMatch: 'full' },
//   //     { path: 'first', component: PersonalInfoComponent },
//   //     { path: 'second', component: EducationComponent }
//   //   ]
//   // }

// { path: '', component:LandingPageComponent, data: { title: 'First Component' }, pathMatch: 'full' },
//   {
//      path: 'login', component:LoginComponent,
//   children:[
//     {path: '', component:LoginComponent, pathMatch: 'full'}
//   ]
// },

// {
//   path: 'register', component:RegisterComponent,
// children:[
//  {path: '', component:RegisterComponent, pathMatch: 'full'}
//  ]
// },


//   { path: 'main', component: HomeLayoutComponent,
//     children: [
//       { path: '', component: PersonalInfoComponent, pathMatch: 'full' },
//       { path: 'first', component: PersonalInfoComponent },
//       { path: 'second', component: EducationComponent }
//     ]
//   }
// ];




@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    LandingPageComponent,
    NavigationComponent,
    PersonalInfoComponent,
    EducationComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    ToolbarComponent,
    RegisterComponent,
    ExperienceComponent,
    SkillsComponent,
    CertificateComponent,
    HobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { useHash: false }
    // ),
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
