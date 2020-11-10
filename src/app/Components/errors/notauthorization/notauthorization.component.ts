import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notauthorization',
  templateUrl: './notauthorization.component.html',
  styleUrls: ['./notauthorization.component.css']
})
export class NotauthorizationComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.setDefaultLang("en");
  }
  ngOnInit(): void {
  }

  changeLanguage(lang:string){
    if(lang == 'tr'){
      this.translate.setDefaultLang('tr');
    } else {
      this.translate.setDefaultLang('en');
    }
  }

}
