import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-buchen2',
  templateUrl: './buchen2.page.html',
  styleUrls: ['./buchen2.page.scss'],
})
export class Buchen2Page implements OnInit {

  mo: '';
  di: '';
  mi: '';
  do: '';
  fr: '';
  sa: '';
  so: '';
  basinf: any;
  mes1: string;
  message: string;
  woche2 = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public emailComposer: EmailComposer) {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.mes1 = this.router.getCurrentNavigation().extras.state.m1;
        }
        console.log('Message 1: ', this.mes1);
      });
    }

  ngOnInit() {}

  makeList() {
    const mon = 'MO: ' + this.mo;
    if  (this.mo === undefined) {
      console.log('');
    } else {
      this.woche2.push(mon);
    }

    const die = 'DI: ' + this.di;
    if  (this.di === undefined) {
      console.log('');
    } else {
      this.woche2.push(die);
    }

    const mit = 'MI: ' + this.mi;
    if  (this.mi === undefined) {
      console.log('');
    } else {
      this.woche2.push(mit);
    }

    const don = 'DO: ' + this.do;
    if  (this.do === undefined) {
      console.log('');
    } else {
      this.woche2.push(don);
    }

    const fre = 'FR: ' + this.fr;
    if  (this.fr === undefined) {
      console.log('');
    } else {
      this.woche2.push(fre);
    }

    const sam = 'SA: ' + this.sa;
    if  (this.sa === undefined) {
      console.log('');
    } else {
      this.woche2.push(sam);
    }


    const son = 'SO: ' + this.so;
    if  (this.so === undefined) {
      console.log('');
    } else {
      this.woche2.push(son);
    }
  }
  sendMail() {
    this.makeList();
    this.message = this.mes1 + '<br>' + 'für übernächste Woche:<br>' + this.woche2;
    const email = {
      to: 'bestellen@taxiwerbung.at',
      subject: 'Taxi-Reservierung',
      body: this.message,
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}
