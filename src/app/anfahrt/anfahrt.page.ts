import { Component, OnInit } from '@angular/core';

declare let google;

@Component({
  selector: 'app-anfahrt',
  templateUrl: './anfahrt.page.html',
  styleUrls: ['./anfahrt.page.scss'],
})
export class AnfahrtPage implements OnInit {
  private map: any;
  private marker: any;

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 48.266512, lng: 16.449592 },
      zoom: 15
    });
    this.marker = new google.maps.Marker({
      position: { lat: 48.266512, lng: 16.449592 },
      map: this.map
    });
  }
}
