import { NgModule } from '@angular/core';
import { GuardGuard } from './Guards/guard.guard';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ViewServiceComponent } from './components/view-service/view-service.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate:[GuardGuard]},
  {path: 'addService', component:AddServiceComponent ,canActivate:[GuardGuard]},
  {path: 'viewService',component:ViewServiceComponent,canActivate:[GuardGuard]},
  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutUsComponent},
  {path: '', redirectTo:'/home' , pathMatch:'full'},
  {path: "**",redirectTo:'/home' , pathMatch:'full'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
