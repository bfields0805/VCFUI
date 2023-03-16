import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { envi }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl: string = `${enviroment.baseUrl}/auth`;
  loggedIn: boolean = false;
  currentUser?: User | null;

  constructor() { }
}
