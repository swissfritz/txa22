import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';


@Component({
  selector: 'app-ft1',
  templateUrl: './ft1.page.html',
  styleUrls: ['./ft1.page.scss'],
})
export class Ft1Page implements OnInit {

  public nxtForm: FormGroup;
  mont: string;
  diet: string;
  mitt: string;
  dont: string;
  fret: string;
  samt: string;
  sont: string;
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

      });

      this.nxtForm = new FormGroup({
        mo: new FormControl(),
        di: new FormControl(),
        mi: new FormControl(),
        do: new FormControl(),
        fr: new FormControl(),
        sa: new FormControl(),
        so: new FormControl(),
      });

      this.nxtForm = formBuilder.group({
        mo: ['', Validators.pattern('f|s|t')],
        di: ['', Validators.pattern('f|s|t')],
        mi: ['', Validators.pattern('f|s|t')],
        do: ['', Validators.pattern('f|s|t')],
        fr: ['', Validators.pattern('f|s|t')],
        sa: ['', Validators.pattern('f|s|t')],
        so: ['', Validators.pattern('f|s|t')]
      });
    }

  ngOnInit() {
  }

  makeList() {
    const wo1 = [];
    const mon = this.nxtForm.value.mo;
    if (mon === 'f') {
      this.mont = 'MO: früh';
    } else if (mon === 's') {
      this.mont = 'MO: spät';
    } else if (mon === 't') {
      this.mont = 'MO: 24h';
    } else {
      this.mont = 'MO: kB';
    }
    wo1.push(this.mont);

    const die = this.nxtForm.value.di;
    if (die === 'f') {
      this.diet = 'DI: früh';
    } else if (die === 's') {
      this.diet = 'DI: spät';
    } else if (die === 't') {
      this.diet = 'DI: 24h';
    } else {
      this.diet = 'DI: kB';
    }
    wo1.push(this.diet);

    const mit = this.nxtForm.value.mi;
    if (mit === 'f') {
      this.mitt = 'MI: früh';
    } else if (mit === 's') {
      this.mitt = 'MI: spät';
    } else if (mit === 't') {
      this.mitt = 'MI: 24h';
    } else {
      this.mitt = 'MI: kB';
    }
    wo1.push(this.mitt);

    const don = this.nxtForm.value.do;
    if (don === 'f') {
      this.dont = 'DO: früh';
    } else if (don === 's') {
      this.dont = 'DO: spät';
    } else if (don === 't') {
      this.dont = 'DO: 24h';
    } else {
      this.dont = 'DO: kB';
    }
    wo1.push(this.dont);

    const fre = this.nxtForm.value.fr;
    if (fre === 'f') {
      this.fret = 'FR: früh';
    } else if (fre === 's') {
      this.fret = 'FR: spät';
    } else if (fre === 't') {
      this.fret = 'FR: 24h';
    } else {
      this.fret = 'FR: kB';
    }
    wo1.push(this.fret);

    const sam = this.nxtForm.value.sa;
    if (sam === 'f') {
      this.samt = 'SA: früh';
    } else if (sam === 's') {
      this.samt = 'SA: spät';
    } else if (sam === 't') {
      this.samt = 'SA: 24h';
    } else {
      this.samt = 'SA: kB';
    }
    wo1.push(this.samt);

    const son = this.nxtForm.value.so;
    if (son === 'f') {
      this.sont = 'SO: früh';
    } else if (son === 's') {
      this.sont = 'SO: spät';
    } else if (son === 't') {
      this.sont = 'SO: 24h';
    } else {
      this.sont = 'SO: kB';
    }
    wo1.push(this.sont);
    this.woche1 = wo1;
  }

  goNext() {
    this.makeList();
    this.mes1 = 'Basisinformationen: ' + this.basinf;
    const navex: NavigationExtras = {
      state: {
        m1: this.mes1
      }
    };
    this.router.navigate([`/ft2`], navex);
  }

  sendMail() {
    this.makeList();
    this.mes1 = 'Basisinformationen: ' + this.basinf + '<br>' + 'Taxi für nächste Woche: <br>' + this.woche1;
    const email = {
      to: 'bestellen@taxiwerbung.at',
      subject: 'Taxi-Reservierung',
      body: this.mes1,
      isHtml: true
    };

    this.emailComposer.open(email);

    this.goNext();
  }
}
