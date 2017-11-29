import { RootAuthState } from './store';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor(private http: Http, private store: Store<RootAuthState>) { console.log('ready!') }

}
