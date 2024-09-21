import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {}

  login(username: string, password: string): boolean {
    // Implement your login logic here. This is a mock implementation.
    // if (username === 'user' && password === 'password') {
    //   this.isAuthenticatedSubject.next(true);
    //   return true;
    // }
    // return false;

    let _users = localStorage.getItem('users');
    let _usersJson:[] = JSON.parse(_users!);
    if(_usersJson){
      let _res = _usersJson.some((x:any)=>x.username == username && x.password == password);
      if(_res){
        this.isAuthenticatedSubject.next(true);
        return true;  
      }
    }
    else{
      alert('user not register');
    }
    return false;
  }

  register(username: string, password: string): void {
    
    let _users = localStorage.getItem('users');
    let _usersJson = JSON.parse(_users!);
    let _userArr = [];
    if(_usersJson){
      _userArr = _usersJson;
    }
    _userArr.push({username:username,password:password});
    localStorage.setItem('users',JSON.stringify(_userArr));
    console.log(`Registered with username: ${username}`);
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
}
