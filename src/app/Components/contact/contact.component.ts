import { ContactService } from './../../Core/Service/ContactService/contactService';
import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public isSuccess:string = "";
  
  constructor(public translate: TranslateService,private contactService:ContactService) {
    translate.setDefaultLang("en");
  }

  contactDetails = new FormGroup({
    emailAddress:new FormControl(null,[Validators.required,Validators.email]),
    message     :new FormControl(null,[Validators.required,Validators.minLength(50)]),
    name        :new FormControl(null,[Validators.required]),
    recaptchaReactive :new FormControl(null,Validators.required),
  }); 

  ngOnInit(): void {}

  changeLanguage(lang:string){
    if(lang == 'tr'){
      this.translate.setDefaultLang('tr');
    } else {
      this.translate.setDefaultLang('en');
    }
  }
  sendContact(){
    
    this.contactService.addContact(this.contactDetails).subscribe(
    data =>
    { 
      this.isSuccess = "ok";
    },
    error => 
    {
      this.isSuccess = "hata";
    });
  }
  reset(){
    console.log("resetlendi");

  }

}
