import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tankenst',
  templateUrl: './tankenst.page.html',
  styleUrls: ['./tankenst.page.scss'],
})
export class TankenstPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tanken');
  }
}
