import { NgModule } from '@angular/core';
import { GuardGuard } from './Guards/guard.guard';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ViewServiceComponent } from './components/view-service/view-service.component';


const routes: Routes = [
  // {path: 'profile', component: ProfileComponent, canActivate:[GuardGuard]},
  {path: 'about',component:AboutUsComponent},
  {path: 'home',component:HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'addService', component:AddServiceComponent},
  {path: 'viewService',component:ViewServiceComponent,canActivate:[GuardGuard]},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
