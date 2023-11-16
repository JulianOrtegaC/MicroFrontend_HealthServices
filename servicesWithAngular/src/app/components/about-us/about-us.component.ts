import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(public dialog: MatDialog){}
  imgAbout1 = assetUrl("about1.png");
  imgAbout2 = assetUrl("about2.png");
  
}

