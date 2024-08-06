import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { SignInComponent } from './User/sign-in/sign-in.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { SignInComponent as AdminSignInComponent} from './Admin/sign-in/sign-in.component';
import { SignInComponent as OwnerSignInComponent} from './Owner/sign-in/sign-in.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  /// home folder
  {path: "home", component: HomeComponent },
  /// about folder
  {path: "aboutCompany", component: AboutCompanyComponent },
  {path: "about", component: AboutComponent },
  {path: "services", component: ServicesComponent },
  {path: "servicesDetails", component: ServicesDetailsComponent },
  // Team Folder
  {path: "team", component: OurteamComponent },
  {path: "teamDetails", component: TeamdetailsComponent },
  {path: "testimonials", component: TestimonialComponent },
  {path: "helpAndFaqs", component: HelpFaqsComponent },
  /// projects Folder
  {path: "projects", component: OutprojectsComponent },
  /// clients
  {path: "clients", component: ClientsComponent },
  /// Contact Us
  {path: "contact", component: ContactComponent },
  /// Sign user
  {path: "signIn", component: SignInComponent },
  {path: "signUp", component: SignUpComponent },
  //sign Admin
  {path: "signIn-admin", component: AdminSignInComponent },
  // sign Owner
  {path: "signIn-owner", component: OwnerSignInComponent },



  {path: "**", component: Error404Component },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
