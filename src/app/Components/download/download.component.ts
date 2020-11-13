import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';


const FILE_TYPES: {[key: string]: string} = {
  pdf:"pdf.png",
  zip:"zip.png",
  ai:"ai.png",
  aep:"aep.png",
  avi:"avi.png",
  css:"css.png",
  csv:"csv.png",
  dbf:"dbf.png",
  doc:"doc.png",
  dwg:"dwg.png",
  exe:"exe.png",
  file:"file.png",
  fla:"fla.png",
  flash:"flash.png",
  html:"html.png",
  iso:"iso.png",
  js:"javascript.png",
  jpg:"jpg.png",
  json:"json-file.png",
  mp3:"mp3.png",
  mp4:"mp4.png",
  ps:"photoshop.png",
  png:"png.png",
  ppt:"ppt.png",
  psd:"psd.png",
  rtf:"rtf.png",
  svg:"svg.png",
  txt:"txt.png",
  xls:"xls.png",
  xml:"xml.png"
}

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  public isSecure:boolean = true;
  public isSuccess:string = "";

  downloadDetail = new FormGroup({
    recaptchaReactive :new FormControl(null,Validators.required),
  }); 

  constructor(public translate: TranslateService) {
    translate.setDefaultLang("en");
  }
  ngOnInit(): void {
    console.log(FILE_TYPES['pdf']);
  }
  changeLanguage(lang:string){
    if(lang == 'tr'){
      this.translate.setDefaultLang('tr');
    } else {
      this.translate.setDefaultLang('en');
    }
  }
  downloadFile(id:string){
  }

  downloadSecureFile(id:string,password:string){
    
  }

  reset() {

  }

}
