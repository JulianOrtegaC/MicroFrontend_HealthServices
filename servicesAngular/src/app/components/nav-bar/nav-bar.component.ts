import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
import { navigateToUrl } from "single-spa";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  imgLogo = assetUrl("Logo.png");
salir(){
  navigateToUrl("/login");
  window.location.replace("/login")
}

}
