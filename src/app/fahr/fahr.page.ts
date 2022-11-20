import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fahr',
  templateUrl: './fahr.page.html',
  styleUrls: ['./fahr.page.scss'],
})
export class FahrPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goProz() {
    this.router.navigateByUrl('/proz');
  }

  goPau() {
    this.router.navigateByUrl('/pausch');
  }

  goPpau() {
    this.router.navigateByUrl('/ppau');
  }

  goGeh() {
    this.router.navigateByUrl('/gehalt');
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }
}
