import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-buchen1',
  templateUrl: './buchen1.page.html',
  styleUrls: ['./buchen1.page.scss'],
})
export class Buchen1Page implements OnInit {

  public nxtForm: FormGroup;
  mot: string;
  dit: string;
  mitt: string;
  basinf: any;
  mes1: string;
  woche1: string[];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public emailComposer: EmailComposer) {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.basinf = this.router.getCurrentNavigation().extras.state.bi;
        }
        console.log('Basisinfo:', this.basinf);
      });
    }
  ngOnInit() {
    this.nxtForm = new FormGroup({
      mo: new FormControl(),
      di: new FormControl(),
      mi: new FormControl(),
      do: new FormControl(),
      fr: new FormControl(),
      sa: new FormControl(),
      so: new FormControl()
    });
  }

  makeList() {
    const wo1 = [];

    const mon = this.nxtForm.value.mo;
    if (mon === 1) {
      wo1.push(' MO: Tag ');
    }
    if (mon === 2) {
      wo1.push(' MO: Nacht ');
    }
    if (mon === 3) {
      wo1.push(' MO: 24h ');
    }

    const die = this.nxtForm.value.di;
    if (die === 1) {
      wo1.push(' DI: Tag ');
    }
    if (die === 2) {
      wo1.push(' DI: Nacht ');
    }
    if (die === 3) {
      wo1.push(' DI: 24h ');
    }
    const mie = this.nxtForm.value.mi;
    if (mie === 1) {
      wo1.push(' MI: Tag ');
    }
    if (mie === 2) {
      wo1.push(' MI: Nacht ');
    }
    if (mie === 3) {
      wo1.push(' MI: 24h ');

    const don = this.nxtForm.value.do;
    if (don === 1) {
      wo1.push(' DO: Tag ');
    }
    if (don === 2) {
      wo1.push(' DO: Nacht ');
    }
    if (don === 3) {
      wo1.push(' DO: 24h ');
    }

    const fre = this.nxtForm.value.fr;
    if (fre === 1) {
      wo1.push(' FR: Tag ');
    }
    if (fre === 2) {
      wo1.push(' FR: Nacht ');
    }
    if (fre === 3) {
      wo1.push(' FR: 24h ');
    }

    const sam = this.nxtForm.value.s;
    if (sam === 1) {
      wo1.push(' SA: Tag ');
    }
    if (sam === 2) {
      wo1.push(' SA: Nacht ');
    }
    if (sam === 3) {
      wo1.push(' SA: 24h ');
    }

    const son = this.nxtForm.value.so;
    if (son === 1) {
      wo1.push(' SO: Tag ');
    }
    if (son === 2) {
      wo1.push(' SO: Nacht ');
    }
    if (son === 3) {
      wo1.push(' SO: 24h ');
    }
    console.log('Woche 1: ', wo1);
    this.woche1 = wo1;
    console.log('Woche1: ', this.woche1);
  }}

  goNext() {
    this.makeList();
    this.mes1 = 'Basisinformationen: ' + this.basinf + '<br>' + 'Taxi für nächste Woche:<br> + ' + this.woche1;
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
