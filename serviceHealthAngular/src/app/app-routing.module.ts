import { NgModule } from '@angular/core';
import { GuardGuard } from './Guards/guard.guard';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {path: 'profile', component: ProfileComponent, canActivate:[GuardGuard]},
  {path: 'about',component:AboutUsComponent},
  {path: 'home',component:HomeComponent},
  {path: '', redirectTo:'/about' , pathMatch:'full'},
  {path: "**",redirectTo:'/about' , pathMatch:'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
