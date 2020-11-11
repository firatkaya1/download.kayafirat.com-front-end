import { Contact } from './../../Model/Contact';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable }           from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
private BASE_URL:string = "https://api.kayafirat.com/firatkaya-0.0.1/contact";

constructor(private http:HttpClient) { }

addContact(contact:Contact,captcha:string){
  this.http.post(this.BASE_URL.concat("?captcha=").concat(captcha),contact);
}


}