import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gehalt',
  templateUrl: './gehalt.page.html',
  styleUrls: ['./gehalt.page.scss'],
})
export class GehaltPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }
}
