import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tankenad',
  templateUrl: './tankenad.page.html',
  styleUrls: ['./tankenad.page.scss'],
})
export class TankenadPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tanken');
  }
}
