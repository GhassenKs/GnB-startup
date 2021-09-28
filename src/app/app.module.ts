import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { LearningComponent } from './components/learning/learning.component';
import { OrganigrammeComponent } from './components/organigramme/organigramme.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    HeaderComponent,
    ServicesComponent,
    LearningComponent,
    OrganigrammeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:HeaderComponent},
      {path:'services', component:ServicesComponent},
      {path:'about', component:LearningComponent},
      {path:'contact', component:ContactComponent},
      {path:'team', component:OrganigrammeComponent},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
