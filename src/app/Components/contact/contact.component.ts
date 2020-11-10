import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  ngOnInit(): void {
  }
  resolved(captchaResponse:string) {
    console.log(captchaResponse);
  }
  changeLanguage(lang:string){
    if(lang == 'tr'){
      this.translate.setDefaultLang('tr');
    } else {
      this.translate.setDefaultLang('en');
    }
  }
  
}
