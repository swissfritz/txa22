import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ppau',
  templateUrl: './ppau.page.html',
  styleUrls: ['./ppau.page.scss'],
})
export class PpauPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }
}
