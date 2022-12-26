import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-buchen1',
  templateUrl: './buchen1.page.html',
  styleUrls: ['./buchen1.page.scss'],
})
export class Buchen1Page implements OnInit {

  mo: '';
  di: '';
  mi: '';
  do: '';
  fr: '';
  sa: '';
  so: '';
  basinf: any;
  mes1: string;
  woche1 = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public emailComposer: EmailComposer) {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.basinf = this.router.getCurrentNavigation().extras.state.bi;
        }
        console.log('Basisinfo:', this.basinf);
      });
    }

  ngOnInit() {}

  makeList() {
    const mon = 'MO: ' + this.mo;
    if  (this.mo === undefined) {
      console.log('');
    } else {
      this.woche1.push(mon);
    }

    const die = 'DI: ' + this.di;
    if  (this.di === undefined) {
      console.log('');
    } else {
      this.woche1.push(die);
    }

    const mit = 'MI: ' + this.mi;
    if  (this.mi === undefined) {
      console.log('');
    } else {
      this.woche1.push(mit);
    }

    const don = 'DO: ' + this.do;
    if  (this.do === undefined) {
      console.log('');
    } else {
      this.woche1.push(don);
    }

    const fre = 'FR: ' + this.fr;
    if  (this.fr === undefined) {
      console.log('');
    } else {
      this.woche1.push(fre);
    }

    const sam = 'SA: ' + this.sa;
    if  (this.sa === undefined) {
      console.log('');
    } else {
      this.woche1.push(sam);
    }


    const son = 'SO: ' + this.so;
    if  (this.so === undefined) {
      console.log('');
    } else {
      this.woche1.push(son);
    }
  }

  goNext() {
    this.makeList();
    this.mes1 = 'Basisinformationen: ' + this.basinf + '<br>' + 'Taxi für nächste Woche:<br>' + this.woche1;
    const navex: NavigationExtras = {
      state: {
        m1: this.mes1
      }
    };
    this.router.navigate([`/buchen2`], navex);
}

  sendMail() {
    this.makeList();
    this.mes1 = 'Basisinformationen: ' + this.basinf + '<br>' + 'Taxi für nächste Woche:<br>' + this.woche1;
    const email = {
      to: 'bestellen@taxiwerbung.at',
      subject: 'Taxi-Reservierung',
      body: this.mes1,
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}
