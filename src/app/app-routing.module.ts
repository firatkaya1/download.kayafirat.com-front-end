import { DownloadComponent } from './Components/download/download.component';
import { NotauthorizationComponent } from './Components/errors/notauthorization/notauthorization.component';
import { NotfoundComponent } from './Components/errors/notfound/notfound.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MainComponent } from './Components/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'main',component:MainComponent},
  {path:'index',component:MainComponent},
  {path:'contact',component:ContactComponent},
  {path:'download',component:DownloadComponent},
  {path:'404',component:NotfoundComponent},
  {path:'403',component:NotauthorizationComponent},
  {path: '**', redirectTo: '/404'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
