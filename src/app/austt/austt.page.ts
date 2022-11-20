import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-austt',
  templateUrl: './austt.page.html',
  styleUrls: ['./austt.page.scss'],
})
export class AusttPage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  goWeb() {
    const tb = this.iab.create('https://taxoil.at/');
  }
}
