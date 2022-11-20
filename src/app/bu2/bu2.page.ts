import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


@Component({
  selector: 'app-bu2',
  templateUrl: './bu2.page.html',
  styleUrls: ['./bu2.page.scss'],
})
export class Bu2Page implements OnInit {

  mo: number;
  di: number;
  mi: number;
  do: number;
  fr: number;
  sa: number;
  so: number;
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
    if (this.mo === 1) {
      this.woche2.push(' MO: Tag ');
    }
    if (this.mo === 2) {
      this.woche2.push(' MO: Nacht ');
    }
    if (this.mo === 3) {
      this.woche2.push(' MO: 24h ');
    }
    if (this.di === 1) {
      this.woche2.push(' DI: Tag ');
    }
    if (this.di === 2) {
      this.woche2.push(' DI: Nacht ');
    }
    if (this.di === 3) {
      this.woche2.push(' DI: 24h ');
    }
    if (this.mi === 1) {
      this.woche2.push(' MI: Tag ');
    }
    if (this.mi === 2) {
      this.woche2.push(' MI: Nacht ');
    }
    if (this.mi === 3) {
      this.woche2.push(' MI: 24h ');
    }
    if (this.do === 1) {
      this.woche2.push(' DO: Tag ');
    }
    if (this.do === 2) {
      this.woche2.push(' DO: Nacht ');
    }
    if (this.do === 3) {
      this.woche2.push(' DO: 24h ');
    }
    if (this.fr === 1) {
      this.woche2.push(' FR: Tag ');
    }
    if (this.fr === 2) {
      this.woche2.push(' FR: Nacht ');
    }
    if (this.fr === 3) {
      this.woche2.push(' FR: 24h ');
    }
    if (this.sa === 1) {
      this.woche2.push(' SA: Tag ');
    }
    if (this.sa === 2) {
      this.woche2.push(' SA: Nacht ');
    }
    if (this.sa === 3) {
      this.woche2.push(' SA: 24h ');
    }
    if (this.so === 1) {
      this.woche2.push(' SO: Tag ');
    }
    if (this.so === 2) {
      this.woche2.push(' SO: Nacht ');
    }
    if (this.so === 3) {
      this.woche2.push(' SO: 24h ');
    }
    console.log('Woche 2: ', this.woche2);
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
