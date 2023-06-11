import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mail } from '../models/mailDto';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  constructor(private http: HttpClient) { }

  sendEmail(body: Mail) {

    const url: string = `${environment.URL}/mailsender` ;

    return this.http.post(url, body)
  }
}
