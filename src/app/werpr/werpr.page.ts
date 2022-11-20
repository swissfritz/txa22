import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-werpr',
  templateUrl: './werpr.page.html',
  styleUrls: ['./werpr.page.scss'],
})
export class WerprPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }

}
