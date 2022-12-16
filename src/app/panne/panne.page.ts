import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panne',
  templateUrl: './panne.page.html',
  styleUrls: ['./panne.page.scss'],
})
export class PannePage implements OnInit {

  message: string;
  zul: string;
  stao: string;

  constructor(private emailComposer: EmailComposer,
    private router: Router) { }

  ngOnInit() {
  }

  sendMailT() {

    this.message = 'Panne Standort: ' + this.stao + '<br>' +
    'Kennzeichen: ' + this.zul;
    const email = {
      to: 'panne@taxiwerbung.at',
      subject: 'Wagen nicht fahrbar - Pannendreieck im Heckfenster!',
      body: this.message,
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}
