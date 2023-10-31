import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GuardGuard} from './Guards/guard.guard'
import { SharedModule } from './shared/shared.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { HomeComponent } from './components/home/home.component';
import { OrderByPrecioPipe } from './components/home/order-by-precio.pipe';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ViewServiceComponent } from './components/view-service/view-service.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    AddServiceComponent,
    HomeComponent,
    OrderByPrecioPipe,
    AboutUsComponent,
    ViewServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [GuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
