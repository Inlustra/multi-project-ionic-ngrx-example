import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthHttpService {
  constructor(private httpClient: HttpClient) {console.log('ready!') }

}
