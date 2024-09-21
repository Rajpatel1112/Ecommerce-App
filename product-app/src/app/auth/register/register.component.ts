import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService , private router: Router) {}
 
  
  onSubmit(): void {
    if (!this.username || !this.password) {
      alert('Please fill in both username and password.');
      return; 
    }
    this.authService.register(this.username, this.password);
    alert('Registration successful! You can now log in.');
    this.router.navigate(['/login']); 
  }
}
