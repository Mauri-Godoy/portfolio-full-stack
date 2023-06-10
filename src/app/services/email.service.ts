import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(input: FormData) {

    const url: string = " https://mailthis.to/mauu.godoy01@gmail.com";

    return this.http.post(url, input, {
      observe: 'response',
      responseType: 'text'
    })
  }
}
