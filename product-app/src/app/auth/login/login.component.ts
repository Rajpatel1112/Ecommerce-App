import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
 

  onSubmit(): void {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/product-list']); 
    } else {
      alert('Login failed! Please check your credentials.');
    }
  }
}
