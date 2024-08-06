import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdditionaltohomeComponent } from './additionaltohome/additionaltohome.component';
import { FooterComponent } from './footer/footer.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { OurteamComponent } from './team/ourteam/ourteam.component';
import { TeamdetailsComponent } from './team/teamdetails/teamdetails.component';
import { TestimonialComponent } from './team/testimonial/testimonial.component';
import { HelpFaqsComponent } from './team/help-faqs/help-faqs.component';
import { Error404Component } from './team/error404/error404.component';
import { OutprojectsComponent } from './projects/outprojects/outprojects.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { SignInComponent } from './User/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdditionaltohomeComponent,
    FooterComponent,
    AboutCompanyComponent,
    AboutComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    OurteamComponent,
    TeamdetailsComponent,
    TestimonialComponent,
    HelpFaqsComponent,
    Error404Component,
    OutprojectsComponent,
    ClientsComponent,
    ContactComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
