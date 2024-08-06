import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };
  errorMessage: any;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    
      console.log('kjdkfjd')
  }


}
