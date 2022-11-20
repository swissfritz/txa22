import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


@Component({
  selector: 'app-bu1',
  templateUrl: './bu1.page.html',
  styleUrls: ['./bu1.page.scss'],
})
export class Bu1Page implements OnInit {

  mo: number;
  di: number;
  mi: number;
  do: number;
  fr: number;
  sa: number;
  so: number;
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
    if (this.mo === 1) {
      this.woche1.push(' MO: Tag ');
    }
    if (this.mo === 2) {
      this.woche1.push(' MO: Nacht ');
    }
    if (this.mo === 3) {
      this.woche1.push(' MO: 24h ');
    }
    if (this.di === 1) {
      this.woche1.push(' DI: Tag ');
    }
    if (this.di === 2) {
      this.woche1.push(' DI: Nacht ');
    }
    if (this.di === 3) {
      this.woche1.push(' DI: 24h ');
    }
    if (this.mi === 1) {
      this.woche1.push(' MI: Tag ');
    }
    if (this.mi === 2) {
      this.woche1.push(' MI: Nacht ');
    }
    if (this.mi === 3) {
      this.woche1.push(' MI: 24h ');
    }
    if (this.do === 1) {
      this.woche1.push(' DO: Tag ');
    }
    if (this.do === 2) {
      this.woche1.push(' DO: Nacht ');
    }
    if (this.do === 3) {
      this.woche1.push(' DO: 24h ');
    }
    if (this.fr === 1) {
      this.woche1.push(' FR: Tag ');
    }
    if (this.fr === 2) {
      this.woche1.push(' FR: Nacht ');
    }
    if (this.fr === 3) {
      this.woche1.push(' FR: 24h ');
    }
    if (this.sa === 1) {
      this.woche1.push(' SA: Tag ');
    }
    if (this.sa === 2) {
      this.woche1.push(' SA: Nacht ');
    }
    if (this.sa === 3) {
      this.woche1.push(' SA: 24h ');
    }
    if (this.so === 1) {
      this.woche1.push(' SO: Tag ');
    }
    if (this.so === 2) {
      this.woche1.push(' SO: Nacht ');
    }
    if (this.so === 3) {
      this.woche1.push(' SO: 24h ');
    }
    console.log('Woche 1: ', this.woche1);
  }

  goNext() {
    this.makeList();
    this.mes1 = 'Basisinformationen: ' + this.basinf + '<br>' + 'Taxi für nächste Woche:<br>' + this.woche1;
    const navex: NavigationExtras = {
      state: {
        m1: this.mes1
      }
    };
    this.router.navigate([`/bu2`], navex);
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
